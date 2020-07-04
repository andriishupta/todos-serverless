'use strict';

const AWS = require('aws-sdk');

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
  const params = {
    TableName: 'Todos',
    Item: {
      id: context.awsRequestId,
      ...JSON.parse(event.body),
    }
  };

  const todos = await docClient.put(params).promise();
  return todos.Items;
}
