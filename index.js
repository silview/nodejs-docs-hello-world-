var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!哈哈");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


// *******************************************************************
//读取文件
//*******************************************************************
var fs = require('fs');

// var data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

fs.readFile('input.txt',function(err,data){
    if(err){
        console.log(err.stack);
        return;
    }; 
    console.log(data.toString());
});
console.log("程序执行结束");


//******************************************************************* 
//事件调用触发
//*******************************************************************
var events = require('events');

var event = new events.EventEmitter();
event.on('some_event',function(){
   console.log('some_event 事件触发');
});

setTimeout(function() {
    event.emit('some_event');
}, 1000);

var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
   console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
  console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");


const buf = Buffer.from('runoob','ascii');
console.log(buf.toString());
console.log(buf.toString('ascii'));
console.log(buf.toString('utf8'));
console.log(buf.toString('utf16le'));
console.log(buf.toString('ucs2'));
console.log(buf.toString('base64'));
console.log(buf.toString('latin1'));
console.log(buf.toString('binary'));
console.log(buf.toString('hex'));

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
 
 
//  写入缓冲区
const buf7 = Buffer.alloc(256);
var len = buf7.write("www.runoob.com");
console.log("写入字节数:" + len);

// 从缓冲区读取数据
const buf8 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++){
    buf8[i] = i + 97;
};

console.log(buf8.toString('ascii'));
console.log(buf8.toString('ascii',0,5));
console.log(buf8.toString('utf8',0,5));
console.log(buf8.toString(undefined,0,5));

// 将 Buffer 转换为 JSON 对象 
const buf9 = Buffer.from([1, 2, 3, 4, 5]);
const json = JSON.stringify(buf9);

console.log(json);

// 缓冲区合并
var buf10 = Buffer.from('缓冲区合并');
var buf11 = Buffer.from('_www.baidu.com');
var buf12 = Buffer.concat([buf10,buf11]);

console.log('buf12 内容 : ' + buf12.toString());

// 缓冲区比较
var buf13 = Buffer.from('abc');
var buf14 = Buffer.from('abcd');
var result = buf13.compare(buf14); 

if (result < 0) {
    console.log(buf13 + '在' + buf14 + '之前');
} else if (result = 0) {
    console.log(buf13 + '与' + buf14 + '相同');
} else if (result > 0) {
    console.log(buf13 + '在' + buf14 + '之后');
}

// 拷贝缓冲区
var buf15 = Buffer.from('abcdefghijkl');
var buf16 = Buffer.from('RUNOOB');

buf16.copy(buf15,2);
console.log(buf15.toString()); 

// 缓冲区裁剪
var buf17 = Buffer.from('RUNOOB');
var buf18 = buf17.slice(0,2) 
console.log("buf18 content : " + buf18.toString());

// 缓冲区长度
var buf19 = Buffer.from('www.runoob.com');
console.log("buf19 length: " + buf19.length);


//*******************************************************************
// Stream 流 
//*******************************************************************

// 从流中读取数据
var fs = require('fs');
var data1 = '';

var readerStream1 = fs.createReadStream('stream.txt');
readerStream1.setEncoding('UTF8');

readerStream1.on('data',function(chunk){
    data1 += chunk;
});

readerStream1.on('end',function(){
    console.log(data1);
});

readerStream1.on('error',function(err){
    console.log(err.stack);
});

console.log("Stream 流处理完成");

// 写入流
var data2 = '写入流数据&&&&&&&&&&&&&&&&&';

var writerStream2 = fs.createWriteStream('output.txt');

writerStream2.write(data2,'UTF8');
writerStream2.end();

writerStream2.on('finish',function(){
    console.log("流写入完成");
});

writerStream2.on('error',function(err){
    console.log(err.stack);
});

console.log("写入流程序完成");

// 管道流

var readerStream3 = fs.createReadStream('stream.txt');
var writerStream3 = fs.createWriteStream('stream_pipe_output.txt');

readerStream3.pipe(writerStream3);

console.log("管道操作完成");

// 用管道和链式来压缩和解压文件
var zlib = require('zlib');

//     // 压缩文件
// fs.createReadStream('stream.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('stream.txt.gz'));

// console.log("stream.txt文件压缩完成");

    // 解压文件
fs.createReadStream('stream.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('stream_unzip.txt'));

console.log("stream.txt.gz解压完成");
