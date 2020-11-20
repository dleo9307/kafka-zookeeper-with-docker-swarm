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

const keyedMessage = kafka.KeyedMessage;
const client = new kafka.KafkaClient(options);
const producer = new kafka.Producer(client);

const km = new keyedMessage('key', 'message');
const payloads = [
        { topic: 'creatrip', messages: 'hello world!!!'},
    ];

producer.on('ready', function () {
    console.log('Kafka Client Ready');
    producer.send(payloads, function (err, data) {
        if(err) console.log("ERROR : ", err);
        else console.log(data);
    });
});

producer.on('error', function (err) {
    console.log('ERROR EVENT : ', err);
})
