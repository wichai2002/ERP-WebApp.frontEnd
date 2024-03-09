const dotenv = require('dotenv');
const aws = require('aws-sdk');
const crypto = require('crypto');

const { promisify } = require('util');
// import aws from 'aws-sdk'
// import crypto from 'crypto'
// import { promisify } from "util"


const randomBytes = promisify(crypto.randomBytes)

dotenv.config()

const region = "ap-southeast-2"
const bucketName = "test-s3-20392"
const accessKeyId = 'AKIAZNPPFSSTGI47XL7J'
const secretAccessKey = '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'

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

async function generateUploadURL(filename) {
    //   const rawBytes = await randomBytes(16)
    const imageName = filename;

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
};

async function deleteObject(filename) {

    try {
        const deletes = await s3.deleteObject({ Bucket: bucketName, Key: filename }).promise();
        console.log(deletes);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getObject(filename) {

    const object = await s3.getObject({ Bucket: bucketName, Key: filename }).promise();
    return object.Body;
}

module.exports.generateUploadURL = generateUploadURL;
module.exports.deleteObject = deleteObject;
module.exports.getObject = getObject;
