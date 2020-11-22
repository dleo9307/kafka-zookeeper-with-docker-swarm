const kafka = require('kafka-node');
const options = {
    /*kafkaHost : A string of kafka broker/host combination delimited by comma for example: kafka-1.us-east-1.myapp.com:9093,kafka-2.us-east-1.myapp.com:9093,kafka-3.us-east-1.myapp.com:9093 default: localhost:9092.
    connectTimeout : in ms it takes to wait for a successful connection before moving to the next host default: 10000
    requestTimeout : in ms for a kafka request to timeout default: 30000
    autoConnect : automatically connect when KafkaClient is instantiated otherwise you need to manually call connect default: true
    connectRetryOptions : object hash that applies to the initial connection. see retry module for these options.
    idleConnection : allows the broker to disconnect an idle connection from a client (otherwise the clients continues to O after being disconnected). The value is elapsed time in ms without any data written to the TCP socket. default: 5 minutes
    reconnectOnIdle : when the connection is closed due to client idling, client will attempt to auto-reconnect. default: true
    maxAsyncRequests : maximum async operations at a time toward the kafka cluster. default: 10
    sslOptions: Object, options to be passed to the tls broker sockets, ex. { rejectUnauthorized: false } (Kafka 0.9+)
    sasl: Object, SASL authentication configuration (only SASL/PLAIN is currently supported), ex. { mechanism: 'plain', username: 'foo', password: 'bar' } (Kafka 0.10+)*/
}

const client = new kafka.KafkaClient(options);

const consumer = new kafka.Consumer(
    client,
    [
        { topic: 'creatrip', partition: 0 }
    ],
    {
        // groupId: 'kafka-node-group',//consumer group id, default `kafka-node-group`
        // Auto commit config
        // autoCommit: true,
        // autoCommitIntervalMs: 5000,
        // The max wait time is the maximum amount of time in milliseconds to block waiting if insufficient data is available at the time the request is issued, default 100ms
        // fetchMaxWaitMs: 100,
        // This is the minimum number of bytes of messages that must be available to give a response, default 1 byte
        // fetchMinBytes: 1,
        // The maximum bytes to include in the message set for this partition. This helps bound the size of the response.
        // fetchMaxBytes: 1024 * 1024,
        // If set true, consumer will fetch message from the given offset in the payloads
        // fromOffset: true,
        // If set to 'buffer', values will be returned as raw buffer objects.
        // encoding: 'utf8',
        // keyEncoding: 'utf8'
    });

    consumer.on('message', (message) => {
        console.log('message : ', message);
    });

