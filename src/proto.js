'use strict'; // code generated by pbf v3.2.1

// CommandSenderData ========================================

var CommandSenderData = exports.CommandSenderData = {};

CommandSenderData.read = function (pbf, end) {
    return pbf.readFields(CommandSenderData._readField, {type: 0, name: "", uniqueId: ""}, end);
};
CommandSenderData._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.name = pbf.readString();
    else if (tag === 3) obj.uniqueId = pbf.readString();
};

CommandSenderData.Type = {
    "OTHER": {
        "value": 0,
        "options": {}
    },
    "PLAYER": {
        "value": 1,
        "options": {}
    }
};

// PlatformData ========================================

var PlatformData = exports.PlatformData = {};

PlatformData.read = function (pbf, end) {
    return pbf.readFields(PlatformData._readField, {type: 0, name: "", version: "", minecraftVersion: ""}, end);
};
PlatformData._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.name = pbf.readString();
    else if (tag === 3) obj.version = pbf.readString();
    else if (tag === 4) obj.minecraftVersion = pbf.readString();
};

PlatformData.Type = {
    "SERVER": {
        "value": 0,
        "options": {}
    },
    "CLIENT": {
        "value": 1,
        "options": {}
    },
    "PROXY": {
        "value": 2,
        "options": {}
    }
};

// HeapData ========================================

var HeapData = exports.HeapData = {};

HeapData.read = function (pbf, end) {
    return pbf.readFields(HeapData._readField, {metadata: null, entries: []}, end);
};
HeapData._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.metadata = HeapMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.entries.push(HeapEntry.read(pbf, pbf.readVarint() + pbf.pos));
};

// HeapMetadata ========================================

var HeapMetadata = exports.HeapMetadata = {};

HeapMetadata.read = function (pbf, end) {
    return pbf.readFields(HeapMetadata._readField, {user: null, platform: null}, end);
};
HeapMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.user = CommandSenderData.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.platform = PlatformData.read(pbf, pbf.readVarint() + pbf.pos);
};

// HeapEntry ========================================

var HeapEntry = exports.HeapEntry = {};

HeapEntry.read = function (pbf, end) {
    return pbf.readFields(HeapEntry._readField, {order: 0, instances: 0, size: 0, type: ""}, end);
};
HeapEntry._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.order = pbf.readVarint(true);
    else if (tag === 2) obj.instances = pbf.readVarint(true);
    else if (tag === 3) obj.size = pbf.readVarint(true);
    else if (tag === 4) obj.type = pbf.readString();
};

// SamplerData ========================================

var SamplerData = exports.SamplerData = {};

SamplerData.read = function (pbf, end) {
    return pbf.readFields(SamplerData._readField, {metadata: null, threads: []}, end);
};
SamplerData._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.metadata = SamplerMetadata.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.threads.push(ThreadNode.read(pbf, pbf.readVarint() + pbf.pos));
};

// SamplerMetadata ========================================

var SamplerMetadata = exports.SamplerMetadata = {};

SamplerMetadata.read = function (pbf, end) {
    return pbf.readFields(SamplerMetadata._readField, {user: null, startTime: 0, interval: 0, threadDumper: null, dataAggregator: null, comment: "", platform: null}, end);
};
SamplerMetadata._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.user = CommandSenderData.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 2) obj.startTime = pbf.readVarint(true);
    else if (tag === 3) obj.interval = pbf.readVarint(true);
    else if (tag === 4) obj.threadDumper = SamplerMetadata.ThreadDumper.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 5) obj.dataAggregator = SamplerMetadata.DataAggregator.read(pbf, pbf.readVarint() + pbf.pos);
    else if (tag === 6) obj.comment = pbf.readString();
    else if (tag === 7) obj.platform = PlatformData.read(pbf, pbf.readVarint() + pbf.pos);
};

// SamplerMetadata.ThreadDumper ========================================

SamplerMetadata.ThreadDumper = {};

SamplerMetadata.ThreadDumper.read = function (pbf, end) {
    return pbf.readFields(SamplerMetadata.ThreadDumper._readField, {type: 0, ids: [], patterns: []}, end);
};
SamplerMetadata.ThreadDumper._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) pbf.readPackedVarint(obj.ids, true);
    else if (tag === 3) obj.patterns.push(pbf.readString());
};

SamplerMetadata.ThreadDumper.Type = {
    "ALL": {
        "value": 0,
        "options": {}
    },
    "SPECIFIC": {
        "value": 1,
        "options": {}
    },
    "REGEX": {
        "value": 2,
        "options": {}
    }
};

// SamplerMetadata.DataAggregator ========================================

SamplerMetadata.DataAggregator = {};

SamplerMetadata.DataAggregator.read = function (pbf, end) {
    return pbf.readFields(SamplerMetadata.DataAggregator._readField, {type: 0, threadGrouper: 0, tickLengthThreshold: 0}, end);
};
SamplerMetadata.DataAggregator._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.type = pbf.readVarint();
    else if (tag === 2) obj.threadGrouper = pbf.readVarint();
    else if (tag === 3) obj.tickLengthThreshold = pbf.readVarint(true);
};

SamplerMetadata.DataAggregator.Type = {
    "SIMPLE": {
        "value": 0,
        "options": {}
    },
    "TICKED": {
        "value": 1,
        "options": {}
    }
};

SamplerMetadata.DataAggregator.ThreadGrouper = {
    "BY_NAME": {
        "value": 0,
        "options": {}
    },
    "BY_POOL": {
        "value": 1,
        "options": {}
    },
    "AS_ONE": {
        "value": 2,
        "options": {}
    }
};

// StackTraceNode ========================================

var StackTraceNode = exports.StackTraceNode = {};

StackTraceNode.read = function (pbf, end) {
    return pbf.readFields(StackTraceNode._readField, {time: 0, children: [], className: "", methodName: "", parentLineNumber: 0, lineNumber: 0, methodDesc: ""}, end);
};
StackTraceNode._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.time = pbf.readDouble();
    else if (tag === 2) obj.children.push(StackTraceNode.read(pbf, pbf.readVarint() + pbf.pos));
    else if (tag === 3) obj.className = pbf.readString();
    else if (tag === 4) obj.methodName = pbf.readString();
    else if (tag === 5) obj.parentLineNumber = pbf.readVarint(true);
    else if (tag === 6) obj.lineNumber = pbf.readVarint(true);
    else if (tag === 7) obj.methodDesc = pbf.readString();
};

// ThreadNode ========================================

var ThreadNode = exports.ThreadNode = {};

ThreadNode.read = function (pbf, end) {
    return pbf.readFields(ThreadNode._readField, {name: "", time: 0, children: []}, end);
};
ThreadNode._readField = function (tag, obj, pbf) {
    if (tag === 1) obj.name = pbf.readString();
    else if (tag === 2) obj.time = pbf.readDouble();
    else if (tag === 3) obj.children.push(StackTraceNode.read(pbf, pbf.readVarint() + pbf.pos));
};