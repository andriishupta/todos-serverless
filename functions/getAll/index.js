'use strict';

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  const params = {
    TableName: 'Todos'
  };

  const todos = await docClient.scan(params).promise();
  return todos.Items;
}
