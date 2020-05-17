var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AdjustCardRequest = (function() {

    /**
     * Properties of an AdjustCardRequest.
     * @exports IAdjustCardRequest
     * @interface IAdjustCardRequest
     * @property {number|null} [userId] AdjustCardRequest userId
     * @property {string|null} [roomNo] AdjustCardRequest roomNo
     */

    /**
     * Constructs a new AdjustCardRequest.
     * @exports AdjustCardRequest
     * @classdesc Represents an AdjustCardRequest.
     * @implements IAdjustCardRequest
     * @constructor
     * @param {IAdjustCardRequest=} [properties] Properties to set
     */
    function AdjustCardRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdjustCardRequest userId.
     * @member {number} userId
     * @memberof AdjustCardRequest
     * @instance
     */
    AdjustCardRequest.prototype.userId = 0;

    /**
     * AdjustCardRequest roomNo.
     * @member {string} roomNo
     * @memberof AdjustCardRequest
     * @instance
     */
    AdjustCardRequest.prototype.roomNo = "";

    /**
     * Creates a new AdjustCardRequest instance using the specified properties.
     * @function create
     * @memberof AdjustCardRequest
     * @static
     * @param {IAdjustCardRequest=} [properties] Properties to set
     * @returns {AdjustCardRequest} AdjustCardRequest instance
     */
    AdjustCardRequest.create = function create(properties) {
        return new AdjustCardRequest(properties);
    };

    /**
     * Encodes the specified AdjustCardRequest message. Does not implicitly {@link AdjustCardRequest.verify|verify} messages.
     * @function encode
     * @memberof AdjustCardRequest
     * @static
     * @param {IAdjustCardRequest} message AdjustCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdjustCardRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomNo);
        return writer;
    };

    /**
     * Encodes the specified AdjustCardRequest message, length delimited. Does not implicitly {@link AdjustCardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdjustCardRequest
     * @static
     * @param {IAdjustCardRequest} message AdjustCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdjustCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdjustCardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof AdjustCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdjustCardRequest} AdjustCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdjustCardRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdjustCardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                message.roomNo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdjustCardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdjustCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdjustCardRequest} AdjustCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdjustCardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdjustCardRequest message.
     * @function verify
     * @memberof AdjustCardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdjustCardRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.roomNo != null && message.hasOwnProperty("roomNo"))
            if (!$util.isString(message.roomNo))
                return "roomNo: string expected";
        return null;
    };

    return AdjustCardRequest;
})();

$root.AdjustCardResponse = (function() {

    /**
     * Properties of an AdjustCardResponse.
     * @exports IAdjustCardResponse
     * @interface IAdjustCardResponse
     * @property {string|null} [content] AdjustCardResponse content
     * @property {IHandsInfo|null} [handsInfo] AdjustCardResponse handsInfo
     */

    /**
     * Constructs a new AdjustCardResponse.
     * @exports AdjustCardResponse
     * @classdesc Represents an AdjustCardResponse.
     * @implements IAdjustCardResponse
     * @constructor
     * @param {IAdjustCardResponse=} [properties] Properties to set
     */
    function AdjustCardResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdjustCardResponse content.
     * @member {string} content
     * @memberof AdjustCardResponse
     * @instance
     */
    AdjustCardResponse.prototype.content = "";

    /**
     * AdjustCardResponse handsInfo.
     * @member {IHandsInfo|null|undefined} handsInfo
     * @memberof AdjustCardResponse
     * @instance
     */
    AdjustCardResponse.prototype.handsInfo = null;

    /**
     * Creates a new AdjustCardResponse instance using the specified properties.
     * @function create
     * @memberof AdjustCardResponse
     * @static
     * @param {IAdjustCardResponse=} [properties] Properties to set
     * @returns {AdjustCardResponse} AdjustCardResponse instance
     */
    AdjustCardResponse.create = function create(properties) {
        return new AdjustCardResponse(properties);
    };

    /**
     * Encodes the specified AdjustCardResponse message. Does not implicitly {@link AdjustCardResponse.verify|verify} messages.
     * @function encode
     * @memberof AdjustCardResponse
     * @static
     * @param {IAdjustCardResponse} message AdjustCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdjustCardResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.handsInfo != null && Object.hasOwnProperty.call(message, "handsInfo"))
            $root.HandsInfo.encode(message.handsInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AdjustCardResponse message, length delimited. Does not implicitly {@link AdjustCardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AdjustCardResponse
     * @static
     * @param {IAdjustCardResponse} message AdjustCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdjustCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdjustCardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AdjustCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AdjustCardResponse} AdjustCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdjustCardResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdjustCardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = reader.string();
                break;
            case 2:
                message.handsInfo = $root.HandsInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AdjustCardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AdjustCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AdjustCardResponse} AdjustCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdjustCardResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdjustCardResponse message.
     * @function verify
     * @memberof AdjustCardResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdjustCardResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.handsInfo != null && message.hasOwnProperty("handsInfo")) {
            var error = $root.HandsInfo.verify(message.handsInfo);
            if (error)
                return "handsInfo." + error;
        }
        return null;
    };

    return AdjustCardResponse;
})();

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number|null} [uid] PlayerInfo uid
     * @property {boolean|null} [isBot] PlayerInfo isBot
     * @property {string|null} [name] PlayerInfo name
     * @property {number|null} [state] PlayerInfo state
     * @property {boolean|null} [alive] PlayerInfo alive
     * @property {string|null} [avatar] PlayerInfo avatar
     * @property {IHandsInfo|null} [handsInfo] PlayerInfo handsInfo
     * @property {number|null} [countDownTime] PlayerInfo countDownTime
     * @property {string|null} [buff] PlayerInfo buff
     */

    /**
     * Constructs a new PlayerInfo.
     * @exports PlayerInfo
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {IPlayerInfo=} [properties] Properties to set
     */
    function PlayerInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerInfo uid.
     * @member {number} uid
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.uid = 0;

    /**
     * PlayerInfo isBot.
     * @member {boolean} isBot
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.isBot = false;

    /**
     * PlayerInfo name.
     * @member {string} name
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.name = "";

    /**
     * PlayerInfo state.
     * @member {number} state
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.state = 0;

    /**
     * PlayerInfo alive.
     * @member {boolean} alive
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.alive = false;

    /**
     * PlayerInfo avatar.
     * @member {string} avatar
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.avatar = "";

    /**
     * PlayerInfo handsInfo.
     * @member {IHandsInfo|null|undefined} handsInfo
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.handsInfo = null;

    /**
     * PlayerInfo countDownTime.
     * @member {number} countDownTime
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.countDownTime = 0;

    /**
     * PlayerInfo buff.
     * @member {string} buff
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.buff = "";

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @function create
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo=} [properties] Properties to set
     * @returns {PlayerInfo} PlayerInfo instance
     */
    PlayerInfo.create = function create(properties) {
        return new PlayerInfo(properties);
    };

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
        if (message.isBot != null && Object.hasOwnProperty.call(message, "isBot"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isBot);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.state);
        if (message.alive != null && Object.hasOwnProperty.call(message, "alive"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.alive);
        if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.avatar);
        if (message.handsInfo != null && Object.hasOwnProperty.call(message, "handsInfo"))
            $root.HandsInfo.encode(message.handsInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.countDownTime != null && Object.hasOwnProperty.call(message, "countDownTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.countDownTime);
        if (message.buff != null && Object.hasOwnProperty.call(message, "buff"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.buff);
        return writer;
    };

    /**
     * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.uint32();
                break;
            case 2:
                message.isBot = reader.bool();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.state = reader.uint32();
                break;
            case 5:
                message.alive = reader.bool();
                break;
            case 6:
                message.avatar = reader.string();
                break;
            case 7:
                message.handsInfo = $root.HandsInfo.decode(reader, reader.uint32());
                break;
            case 8:
                message.countDownTime = reader.uint32();
                break;
            case 9:
                message.buff = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerInfo message.
     * @function verify
     * @memberof PlayerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
        if (message.isBot != null && message.hasOwnProperty("isBot"))
            if (typeof message.isBot !== "boolean")
                return "isBot: boolean expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.alive != null && message.hasOwnProperty("alive"))
            if (typeof message.alive !== "boolean")
                return "alive: boolean expected";
        if (message.avatar != null && message.hasOwnProperty("avatar"))
            if (!$util.isString(message.avatar))
                return "avatar: string expected";
        if (message.handsInfo != null && message.hasOwnProperty("handsInfo")) {
            var error = $root.HandsInfo.verify(message.handsInfo);
            if (error)
                return "handsInfo." + error;
        }
        if (message.countDownTime != null && message.hasOwnProperty("countDownTime"))
            if (!$util.isInteger(message.countDownTime))
                return "countDownTime: integer expected";
        if (message.buff != null && message.hasOwnProperty("buff"))
            if (!$util.isString(message.buff))
                return "buff: string expected";
        return null;
    };

    return PlayerInfo;
})();

$root.RoomInfo = (function() {

    /**
     * Properties of a RoomInfo.
     * @exports IRoomInfo
     * @interface IRoomInfo
     * @property {string|null} [no] RoomInfo no
     * @property {number|null} [state] RoomInfo state
     * @property {number|null} [stackCount] RoomInfo stackCount
     * @property {boolean|null} [clockwise] RoomInfo clockwise
     * @property {Array.<IPlayerInfo>|null} [players] RoomInfo players
     * @property {IDeckInfo|null} [deckInfo] RoomInfo deckInfo
     */

    /**
     * Constructs a new RoomInfo.
     * @exports RoomInfo
     * @classdesc Represents a RoomInfo.
     * @implements IRoomInfo
     * @constructor
     * @param {IRoomInfo=} [properties] Properties to set
     */
    function RoomInfo(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomInfo no.
     * @member {string} no
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.no = "";

    /**
     * RoomInfo state.
     * @member {number} state
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.state = 0;

    /**
     * RoomInfo stackCount.
     * @member {number} stackCount
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.stackCount = 0;

    /**
     * RoomInfo clockwise.
     * @member {boolean} clockwise
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.clockwise = false;

    /**
     * RoomInfo players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.players = $util.emptyArray;

    /**
     * RoomInfo deckInfo.
     * @member {IDeckInfo|null|undefined} deckInfo
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.deckInfo = null;

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @function create
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo=} [properties] Properties to set
     * @returns {RoomInfo} RoomInfo instance
     */
    RoomInfo.create = function create(properties) {
        return new RoomInfo(properties);
    };

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encode
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.no != null && Object.hasOwnProperty.call(message, "no"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.no);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.state);
        if (message.stackCount != null && Object.hasOwnProperty.call(message, "stackCount"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stackCount);
        if (message.clockwise != null && Object.hasOwnProperty.call(message, "clockwise"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.clockwise);
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.PlayerInfo.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.deckInfo != null && Object.hasOwnProperty.call(message, "deckInfo"))
            $root.DeckInfo.encode(message.deckInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {IRoomInfo} message RoomInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.no = reader.string();
                break;
            case 2:
                message.state = reader.uint32();
                break;
            case 3:
                message.stackCount = reader.int32();
                break;
            case 4:
                message.clockwise = reader.bool();
                break;
            case 5:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.PlayerInfo.decode(reader, reader.uint32()));
                break;
            case 8:
                message.deckInfo = $root.DeckInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomInfo} RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomInfo message.
     * @function verify
     * @memberof RoomInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.no != null && message.hasOwnProperty("no"))
            if (!$util.isString(message.no))
                return "no: string expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.stackCount != null && message.hasOwnProperty("stackCount"))
            if (!$util.isInteger(message.stackCount))
                return "stackCount: integer expected";
        if (message.clockwise != null && message.hasOwnProperty("clockwise"))
            if (typeof message.clockwise !== "boolean")
                return "clockwise: boolean expected";
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.PlayerInfo.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        if (message.deckInfo != null && message.hasOwnProperty("deckInfo")) {
            var error = $root.DeckInfo.verify(message.deckInfo);
            if (error)
                return "deckInfo." + error;
        }
        return null;
    };

    return RoomInfo;
})();

$root.DeckInfo = (function() {

    /**
     * Properties of a DeckInfo.
     * @exports IDeckInfo
     * @interface IDeckInfo
     * @property {number|null} [leftCount] DeckInfo leftCount
     * @property {number|null} [hit] DeckInfo hit
     * @property {string|null} [buff] DeckInfo buff
     */

    /**
     * Constructs a new DeckInfo.
     * @exports DeckInfo
     * @classdesc Represents a DeckInfo.
     * @implements IDeckInfo
     * @constructor
     * @param {IDeckInfo=} [properties] Properties to set
     */
    function DeckInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeckInfo leftCount.
     * @member {number} leftCount
     * @memberof DeckInfo
     * @instance
     */
    DeckInfo.prototype.leftCount = 0;

    /**
     * DeckInfo hit.
     * @member {number} hit
     * @memberof DeckInfo
     * @instance
     */
    DeckInfo.prototype.hit = 0;

    /**
     * DeckInfo buff.
     * @member {string} buff
     * @memberof DeckInfo
     * @instance
     */
    DeckInfo.prototype.buff = "";

    /**
     * Creates a new DeckInfo instance using the specified properties.
     * @function create
     * @memberof DeckInfo
     * @static
     * @param {IDeckInfo=} [properties] Properties to set
     * @returns {DeckInfo} DeckInfo instance
     */
    DeckInfo.create = function create(properties) {
        return new DeckInfo(properties);
    };

    /**
     * Encodes the specified DeckInfo message. Does not implicitly {@link DeckInfo.verify|verify} messages.
     * @function encode
     * @memberof DeckInfo
     * @static
     * @param {IDeckInfo} message DeckInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeckInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.leftCount != null && Object.hasOwnProperty.call(message, "leftCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.leftCount);
        if (message.hit != null && Object.hasOwnProperty.call(message, "hit"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.hit);
        if (message.buff != null && Object.hasOwnProperty.call(message, "buff"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.buff);
        return writer;
    };

    /**
     * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link DeckInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeckInfo
     * @static
     * @param {IDeckInfo} message DeckInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeckInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeckInfo message from the specified reader or buffer.
     * @function decode
     * @memberof DeckInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeckInfo} DeckInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeckInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeckInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.leftCount = reader.int32();
                break;
            case 2:
                message.hit = reader.int32();
                break;
            case 3:
                message.buff = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeckInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeckInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeckInfo} DeckInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeckInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeckInfo message.
     * @function verify
     * @memberof DeckInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeckInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.leftCount != null && message.hasOwnProperty("leftCount"))
            if (!$util.isInteger(message.leftCount))
                return "leftCount: integer expected";
        if (message.hit != null && message.hasOwnProperty("hit"))
            if (!$util.isInteger(message.hit))
                return "hit: integer expected";
        if (message.buff != null && message.hasOwnProperty("buff"))
            if (!$util.isString(message.buff))
                return "buff: string expected";
        return null;
    };

    return DeckInfo;
})();

$root.CardInfo = (function() {

    /**
     * Properties of a CardInfo.
     * @exports ICardInfo
     * @interface ICardInfo
     * @property {number|null} [id] CardInfo id
     * @property {string|null} [name] CardInfo name
     * @property {string|null} [icon] CardInfo icon
     */

    /**
     * Constructs a new CardInfo.
     * @exports CardInfo
     * @classdesc Represents a CardInfo.
     * @implements ICardInfo
     * @constructor
     * @param {ICardInfo=} [properties] Properties to set
     */
    function CardInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardInfo id.
     * @member {number} id
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.id = 0;

    /**
     * CardInfo name.
     * @member {string} name
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.name = "";

    /**
     * CardInfo icon.
     * @member {string} icon
     * @memberof CardInfo
     * @instance
     */
    CardInfo.prototype.icon = "";

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @function create
     * @memberof CardInfo
     * @static
     * @param {ICardInfo=} [properties] Properties to set
     * @returns {CardInfo} CardInfo instance
     */
    CardInfo.create = function create(properties) {
        return new CardInfo(properties);
    };

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encode
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} message CardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
        return writer;
    };

    /**
     * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CardInfo
     * @static
     * @param {ICardInfo} message CardInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @function decode
     * @memberof CardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.name = reader.string();
                break;
            case 3:
                message.icon = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CardInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CardInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CardInfo} CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CardInfo message.
     * @function verify
     * @memberof CardInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CardInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.icon != null && message.hasOwnProperty("icon"))
            if (!$util.isString(message.icon))
                return "icon: string expected";
        return null;
    };

    return CardInfo;
})();

$root.HandsInfo = (function() {

    /**
     * Properties of a HandsInfo.
     * @exports IHandsInfo
     * @interface IHandsInfo
     * @property {number|null} [uid] HandsInfo uid
     * @property {Array.<ICardInfo>|null} [cardInfos] HandsInfo cardInfos
     * @property {number|null} [mulliganCnt] HandsInfo mulliganCnt
     * @property {number|Long|null} [mulliganExpireTime] HandsInfo mulliganExpireTime
     */

    /**
     * Constructs a new HandsInfo.
     * @exports HandsInfo
     * @classdesc Represents a HandsInfo.
     * @implements IHandsInfo
     * @constructor
     * @param {IHandsInfo=} [properties] Properties to set
     */
    function HandsInfo(properties) {
        this.cardInfos = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HandsInfo uid.
     * @member {number} uid
     * @memberof HandsInfo
     * @instance
     */
    HandsInfo.prototype.uid = 0;

    /**
     * HandsInfo cardInfos.
     * @member {Array.<ICardInfo>} cardInfos
     * @memberof HandsInfo
     * @instance
     */
    HandsInfo.prototype.cardInfos = $util.emptyArray;

    /**
     * HandsInfo mulliganCnt.
     * @member {number} mulliganCnt
     * @memberof HandsInfo
     * @instance
     */
    HandsInfo.prototype.mulliganCnt = 0;

    /**
     * HandsInfo mulliganExpireTime.
     * @member {number|Long} mulliganExpireTime
     * @memberof HandsInfo
     * @instance
     */
    HandsInfo.prototype.mulliganExpireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new HandsInfo instance using the specified properties.
     * @function create
     * @memberof HandsInfo
     * @static
     * @param {IHandsInfo=} [properties] Properties to set
     * @returns {HandsInfo} HandsInfo instance
     */
    HandsInfo.create = function create(properties) {
        return new HandsInfo(properties);
    };

    /**
     * Encodes the specified HandsInfo message. Does not implicitly {@link HandsInfo.verify|verify} messages.
     * @function encode
     * @memberof HandsInfo
     * @static
     * @param {IHandsInfo} message HandsInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandsInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
        if (message.cardInfos != null && message.cardInfos.length)
            for (var i = 0; i < message.cardInfos.length; ++i)
                $root.CardInfo.encode(message.cardInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.mulliganCnt != null && Object.hasOwnProperty.call(message, "mulliganCnt"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.mulliganCnt);
        if (message.mulliganExpireTime != null && Object.hasOwnProperty.call(message, "mulliganExpireTime"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.mulliganExpireTime);
        return writer;
    };

    /**
     * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link HandsInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HandsInfo
     * @static
     * @param {IHandsInfo} message HandsInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HandsInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HandsInfo message from the specified reader or buffer.
     * @function decode
     * @memberof HandsInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HandsInfo} HandsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandsInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HandsInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.uint32();
                break;
            case 2:
                if (!(message.cardInfos && message.cardInfos.length))
                    message.cardInfos = [];
                message.cardInfos.push($root.CardInfo.decode(reader, reader.uint32()));
                break;
            case 3:
                message.mulliganCnt = reader.uint32();
                break;
            case 4:
                message.mulliganExpireTime = reader.uint64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HandsInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HandsInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HandsInfo} HandsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HandsInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HandsInfo message.
     * @function verify
     * @memberof HandsInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HandsInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
        if (message.cardInfos != null && message.hasOwnProperty("cardInfos")) {
            if (!Array.isArray(message.cardInfos))
                return "cardInfos: array expected";
            for (var i = 0; i < message.cardInfos.length; ++i) {
                var error = $root.CardInfo.verify(message.cardInfos[i]);
                if (error)
                    return "cardInfos." + error;
            }
        }
        if (message.mulliganCnt != null && message.hasOwnProperty("mulliganCnt"))
            if (!$util.isInteger(message.mulliganCnt))
                return "mulliganCnt: integer expected";
        if (message.mulliganExpireTime != null && message.hasOwnProperty("mulliganExpireTime"))
            if (!$util.isInteger(message.mulliganExpireTime) && !(message.mulliganExpireTime && $util.isInteger(message.mulliganExpireTime.low) && $util.isInteger(message.mulliganExpireTime.high)))
                return "mulliganExpireTime: integer|Long expected";
        return null;
    };

    return HandsInfo;
})();

$root.GetCard = (function() {

    /**
     * Properties of a GetCard.
     * @exports IGetCard
     * @interface IGetCard
     * @property {number|null} [userId] GetCard userId
     * @property {Array.<ICardInfo>|null} [newCard] GetCard newCard
     */

    /**
     * Constructs a new GetCard.
     * @exports GetCard
     * @classdesc Represents a GetCard.
     * @implements IGetCard
     * @constructor
     * @param {IGetCard=} [properties] Properties to set
     */
    function GetCard(properties) {
        this.newCard = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetCard userId.
     * @member {number} userId
     * @memberof GetCard
     * @instance
     */
    GetCard.prototype.userId = 0;

    /**
     * GetCard newCard.
     * @member {Array.<ICardInfo>} newCard
     * @memberof GetCard
     * @instance
     */
    GetCard.prototype.newCard = $util.emptyArray;

    /**
     * Creates a new GetCard instance using the specified properties.
     * @function create
     * @memberof GetCard
     * @static
     * @param {IGetCard=} [properties] Properties to set
     * @returns {GetCard} GetCard instance
     */
    GetCard.create = function create(properties) {
        return new GetCard(properties);
    };

    /**
     * Encodes the specified GetCard message. Does not implicitly {@link GetCard.verify|verify} messages.
     * @function encode
     * @memberof GetCard
     * @static
     * @param {IGetCard} message GetCard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCard.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.newCard != null && message.newCard.length)
            for (var i = 0; i < message.newCard.length; ++i)
                $root.CardInfo.encode(message.newCard[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GetCard message, length delimited. Does not implicitly {@link GetCard.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetCard
     * @static
     * @param {IGetCard} message GetCard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetCard.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetCard message from the specified reader or buffer.
     * @function decode
     * @memberof GetCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetCard} GetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCard.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetCard();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                if (!(message.newCard && message.newCard.length))
                    message.newCard = [];
                message.newCard.push($root.CardInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetCard message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetCard} GetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetCard.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetCard message.
     * @function verify
     * @memberof GetCard
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetCard.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.newCard != null && message.hasOwnProperty("newCard")) {
            if (!Array.isArray(message.newCard))
                return "newCard: array expected";
            for (var i = 0; i < message.newCard.length; ++i) {
                var error = $root.CardInfo.verify(message.newCard[i]);
                if (error)
                    return "newCard." + error;
            }
        }
        return null;
    };

    return GetCard;
})();

$root.ClearBoomRequest = (function() {

    /**
     * Properties of a ClearBoomRequest.
     * @exports IClearBoomRequest
     * @interface IClearBoomRequest
     * @property {number|null} [userId] ClearBoomRequest userId
     * @property {string|null} [roomNo] ClearBoomRequest roomNo
     * @property {number|null} [returnPos] ClearBoomRequest returnPos
     */

    /**
     * Constructs a new ClearBoomRequest.
     * @exports ClearBoomRequest
     * @classdesc Represents a ClearBoomRequest.
     * @implements IClearBoomRequest
     * @constructor
     * @param {IClearBoomRequest=} [properties] Properties to set
     */
    function ClearBoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClearBoomRequest userId.
     * @member {number} userId
     * @memberof ClearBoomRequest
     * @instance
     */
    ClearBoomRequest.prototype.userId = 0;

    /**
     * ClearBoomRequest roomNo.
     * @member {string} roomNo
     * @memberof ClearBoomRequest
     * @instance
     */
    ClearBoomRequest.prototype.roomNo = "";

    /**
     * ClearBoomRequest returnPos.
     * @member {number} returnPos
     * @memberof ClearBoomRequest
     * @instance
     */
    ClearBoomRequest.prototype.returnPos = 0;

    /**
     * Creates a new ClearBoomRequest instance using the specified properties.
     * @function create
     * @memberof ClearBoomRequest
     * @static
     * @param {IClearBoomRequest=} [properties] Properties to set
     * @returns {ClearBoomRequest} ClearBoomRequest instance
     */
    ClearBoomRequest.create = function create(properties) {
        return new ClearBoomRequest(properties);
    };

    /**
     * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoomRequest.verify|verify} messages.
     * @function encode
     * @memberof ClearBoomRequest
     * @static
     * @param {IClearBoomRequest} message ClearBoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClearBoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomNo);
        if (message.returnPos != null && Object.hasOwnProperty.call(message, "returnPos"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.returnPos);
        return writer;
    };

    /**
     * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClearBoomRequest
     * @static
     * @param {IClearBoomRequest} message ClearBoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClearBoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClearBoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ClearBoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClearBoomRequest} ClearBoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClearBoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClearBoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                message.roomNo = reader.string();
                break;
            case 3:
                message.returnPos = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClearBoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClearBoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClearBoomRequest} ClearBoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClearBoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClearBoomRequest message.
     * @function verify
     * @memberof ClearBoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClearBoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.roomNo != null && message.hasOwnProperty("roomNo"))
            if (!$util.isString(message.roomNo))
                return "roomNo: string expected";
        if (message.returnPos != null && message.hasOwnProperty("returnPos"))
            if (!$util.isInteger(message.returnPos))
                return "returnPos: integer expected";
        return null;
    };

    return ClearBoomRequest;
})();

$root.JoinRoomRequest = (function() {

    /**
     * Properties of a JoinRoomRequest.
     * @exports IJoinRoomRequest
     * @interface IJoinRoomRequest
     * @property {string|null} [cookie] JoinRoomRequest cookie
     * @property {number|null} [wdh] JoinRoomRequest wdh
     * @property {Array.<IPlayerInfo>|null} [players] JoinRoomRequest players
     * @property {number|null} [gameId] JoinRoomRequest gameId
     * @property {string|null} [roomNo] JoinRoomRequest roomNo
     * @property {number|null} [uid] JoinRoomRequest uid
     */

    /**
     * Constructs a new JoinRoomRequest.
     * @exports JoinRoomRequest
     * @classdesc Represents a JoinRoomRequest.
     * @implements IJoinRoomRequest
     * @constructor
     * @param {IJoinRoomRequest=} [properties] Properties to set
     */
    function JoinRoomRequest(properties) {
        this.players = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomRequest cookie.
     * @member {string} cookie
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.cookie = "";

    /**
     * JoinRoomRequest wdh.
     * @member {number} wdh
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.wdh = 0;

    /**
     * JoinRoomRequest players.
     * @member {Array.<IPlayerInfo>} players
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.players = $util.emptyArray;

    /**
     * JoinRoomRequest gameId.
     * @member {number} gameId
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.gameId = 0;

    /**
     * JoinRoomRequest roomNo.
     * @member {string} roomNo
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.roomNo = "";

    /**
     * JoinRoomRequest uid.
     * @member {number} uid
     * @memberof JoinRoomRequest
     * @instance
     */
    JoinRoomRequest.prototype.uid = 0;

    /**
     * Creates a new JoinRoomRequest instance using the specified properties.
     * @function create
     * @memberof JoinRoomRequest
     * @static
     * @param {IJoinRoomRequest=} [properties] Properties to set
     * @returns {JoinRoomRequest} JoinRoomRequest instance
     */
    JoinRoomRequest.create = function create(properties) {
        return new JoinRoomRequest(properties);
    };

    /**
     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomRequest
     * @static
     * @param {IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cookie != null && Object.hasOwnProperty.call(message, "cookie"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cookie);
        if (message.wdh != null && Object.hasOwnProperty.call(message, "wdh"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.wdh);
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gameId);
        if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.roomNo);
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uid);
        return writer;
    };

    /**
     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomRequest
     * @static
     * @param {IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomRequest} JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.cookie = reader.string();
                break;
            case 2:
                message.wdh = reader.uint32();
                break;
            case 3:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.PlayerInfo.decode(reader, reader.uint32()));
                break;
            case 4:
                message.gameId = reader.uint32();
                break;
            case 5:
                message.roomNo = reader.string();
                break;
            case 6:
                message.uid = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomRequest} JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinRoomRequest message.
     * @function verify
     * @memberof JoinRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinRoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cookie != null && message.hasOwnProperty("cookie"))
            if (!$util.isString(message.cookie))
                return "cookie: string expected";
        if (message.wdh != null && message.hasOwnProperty("wdh"))
            if (!$util.isInteger(message.wdh))
                return "wdh: integer expected";
        if (message.players != null && message.hasOwnProperty("players")) {
            if (!Array.isArray(message.players))
                return "players: array expected";
            for (var i = 0; i < message.players.length; ++i) {
                var error = $root.PlayerInfo.verify(message.players[i]);
                if (error)
                    return "players." + error;
            }
        }
        if (message.gameId != null && message.hasOwnProperty("gameId"))
            if (!$util.isInteger(message.gameId))
                return "gameId: integer expected";
        if (message.roomNo != null && message.hasOwnProperty("roomNo"))
            if (!$util.isString(message.roomNo))
                return "roomNo: string expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
        return null;
    };

    return JoinRoomRequest;
})();

$root.JoinRoomResponse = (function() {

    /**
     * Properties of a JoinRoomResponse.
     * @exports IJoinRoomResponse
     * @interface IJoinRoomResponse
     * @property {string|null} [content] JoinRoomResponse content
     * @property {IRoomInfo|null} [roomInfo] JoinRoomResponse roomInfo
     */

    /**
     * Constructs a new JoinRoomResponse.
     * @exports JoinRoomResponse
     * @classdesc Represents a JoinRoomResponse.
     * @implements IJoinRoomResponse
     * @constructor
     * @param {IJoinRoomResponse=} [properties] Properties to set
     */
    function JoinRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * JoinRoomResponse content.
     * @member {string} content
     * @memberof JoinRoomResponse
     * @instance
     */
    JoinRoomResponse.prototype.content = "";

    /**
     * JoinRoomResponse roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof JoinRoomResponse
     * @instance
     */
    JoinRoomResponse.prototype.roomInfo = null;

    /**
     * Creates a new JoinRoomResponse instance using the specified properties.
     * @function create
     * @memberof JoinRoomResponse
     * @static
     * @param {IJoinRoomResponse=} [properties] Properties to set
     * @returns {JoinRoomResponse} JoinRoomResponse instance
     */
    JoinRoomResponse.create = function create(properties) {
        return new JoinRoomResponse(properties);
    };

    /**
     * Encodes the specified JoinRoomResponse message. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof JoinRoomResponse
     * @static
     * @param {IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof JoinRoomResponse
     * @static
     * @param {IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    JoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof JoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {JoinRoomResponse} JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = reader.string();
                break;
            case 2:
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof JoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {JoinRoomResponse} JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    JoinRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a JoinRoomResponse message.
     * @function verify
     * @memberof JoinRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    JoinRoomResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            var error = $root.RoomInfo.verify(message.roomInfo);
            if (error)
                return "roomInfo." + error;
        }
        return null;
    };

    return JoinRoomResponse;
})();

$root.Message = (function() {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {string|null} [requestId] Message requestId
     * @property {Message.CommandType|null} [cmd] Message cmd
     * @property {string|null} [content] Message content
     * @property {IJoinRoomRequest|null} [joinRoomReq] Message joinRoomReq
     * @property {IJoinRoomResponse|null} [joinRoomResp] Message joinRoomResp
     * @property {IAdjustCardRequest|null} [adjustCardReq] Message adjustCardReq
     * @property {IAdjustCardResponse|null} [adjustCardResp] Message adjustCardResp
     * @property {IRoomInfo|null} [roomInfo] Message roomInfo
     * @property {IPickCardRequest|null} [pickCardReq] Message pickCardReq
     * @property {IGetCard|null} [getCardInfo] Message getCardInfo
     * @property {IClearBoomRequest|null} [clearBoomReq] Message clearBoomReq
     * @property {IReleaseCardRequest|null} [releaseCardReq] Message releaseCardReq
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message requestId.
     * @member {string} requestId
     * @memberof Message
     * @instance
     */
    Message.prototype.requestId = "";

    /**
     * Message cmd.
     * @member {Message.CommandType} cmd
     * @memberof Message
     * @instance
     */
    Message.prototype.cmd = 0;

    /**
     * Message content.
     * @member {string} content
     * @memberof Message
     * @instance
     */
    Message.prototype.content = "";

    /**
     * Message joinRoomReq.
     * @member {IJoinRoomRequest|null|undefined} joinRoomReq
     * @memberof Message
     * @instance
     */
    Message.prototype.joinRoomReq = null;

    /**
     * Message joinRoomResp.
     * @member {IJoinRoomResponse|null|undefined} joinRoomResp
     * @memberof Message
     * @instance
     */
    Message.prototype.joinRoomResp = null;

    /**
     * Message adjustCardReq.
     * @member {IAdjustCardRequest|null|undefined} adjustCardReq
     * @memberof Message
     * @instance
     */
    Message.prototype.adjustCardReq = null;

    /**
     * Message adjustCardResp.
     * @member {IAdjustCardResponse|null|undefined} adjustCardResp
     * @memberof Message
     * @instance
     */
    Message.prototype.adjustCardResp = null;

    /**
     * Message roomInfo.
     * @member {IRoomInfo|null|undefined} roomInfo
     * @memberof Message
     * @instance
     */
    Message.prototype.roomInfo = null;

    /**
     * Message pickCardReq.
     * @member {IPickCardRequest|null|undefined} pickCardReq
     * @memberof Message
     * @instance
     */
    Message.prototype.pickCardReq = null;

    /**
     * Message getCardInfo.
     * @member {IGetCard|null|undefined} getCardInfo
     * @memberof Message
     * @instance
     */
    Message.prototype.getCardInfo = null;

    /**
     * Message clearBoomReq.
     * @member {IClearBoomRequest|null|undefined} clearBoomReq
     * @memberof Message
     * @instance
     */
    Message.prototype.clearBoomReq = null;

    /**
     * Message releaseCardReq.
     * @member {IReleaseCardRequest|null|undefined} releaseCardReq
     * @memberof Message
     * @instance
     */
    Message.prototype.releaseCardReq = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Message extension.
     * @member {"joinRoomReq"|"joinRoomResp"|"adjustCardReq"|"adjustCardResp"|"roomInfo"|"pickCardReq"|"getCardInfo"|"clearBoomReq"|"releaseCardReq"|undefined} extension
     * @memberof Message
     * @instance
     */
    Object.defineProperty(Message.prototype, "extension", {
        get: $util.oneOfGetter($oneOfFields = ["joinRoomReq", "joinRoomResp", "adjustCardReq", "adjustCardResp", "roomInfo", "pickCardReq", "getCardInfo", "clearBoomReq", "releaseCardReq"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestId != null && Object.hasOwnProperty.call(message, "requestId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.requestId);
        if (message.cmd != null && Object.hasOwnProperty.call(message, "cmd"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cmd);
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
        if (message.joinRoomReq != null && Object.hasOwnProperty.call(message, "joinRoomReq"))
            $root.JoinRoomRequest.encode(message.joinRoomReq, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message.joinRoomResp != null && Object.hasOwnProperty.call(message, "joinRoomResp"))
            $root.JoinRoomResponse.encode(message.joinRoomResp, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
        if (message.adjustCardReq != null && Object.hasOwnProperty.call(message, "adjustCardReq"))
            $root.AdjustCardRequest.encode(message.adjustCardReq, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
        if (message.adjustCardResp != null && Object.hasOwnProperty.call(message, "adjustCardResp"))
            $root.AdjustCardResponse.encode(message.adjustCardResp, writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
        if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
            $root.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
        if (message.pickCardReq != null && Object.hasOwnProperty.call(message, "pickCardReq"))
            $root.PickCardRequest.encode(message.pickCardReq, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
        if (message.getCardInfo != null && Object.hasOwnProperty.call(message, "getCardInfo"))
            $root.GetCard.encode(message.getCardInfo, writer.uint32(/* id 107, wireType 2 =*/858).fork()).ldelim();
        if (message.clearBoomReq != null && Object.hasOwnProperty.call(message, "clearBoomReq"))
            $root.ClearBoomRequest.encode(message.clearBoomReq, writer.uint32(/* id 108, wireType 2 =*/866).fork()).ldelim();
        if (message.releaseCardReq != null && Object.hasOwnProperty.call(message, "releaseCardReq"))
            $root.ReleaseCardRequest.encode(message.releaseCardReq, writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.requestId = reader.string();
                break;
            case 2:
                message.cmd = reader.int32();
                break;
            case 3:
                message.content = reader.string();
                break;
            case 101:
                message.joinRoomReq = $root.JoinRoomRequest.decode(reader, reader.uint32());
                break;
            case 102:
                message.joinRoomResp = $root.JoinRoomResponse.decode(reader, reader.uint32());
                break;
            case 103:
                message.adjustCardReq = $root.AdjustCardRequest.decode(reader, reader.uint32());
                break;
            case 104:
                message.adjustCardResp = $root.AdjustCardResponse.decode(reader, reader.uint32());
                break;
            case 105:
                message.roomInfo = $root.RoomInfo.decode(reader, reader.uint32());
                break;
            case 106:
                message.pickCardReq = $root.PickCardRequest.decode(reader, reader.uint32());
                break;
            case 107:
                message.getCardInfo = $root.GetCard.decode(reader, reader.uint32());
                break;
            case 108:
                message.clearBoomReq = $root.ClearBoomRequest.decode(reader, reader.uint32());
                break;
            case 109:
                message.releaseCardReq = $root.ReleaseCardRequest.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.requestId != null && message.hasOwnProperty("requestId"))
            if (!$util.isString(message.requestId))
                return "requestId: string expected";
        if (message.cmd != null && message.hasOwnProperty("cmd"))
            switch (message.cmd) {
            default:
                return "cmd: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 100:
                break;
            }
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.joinRoomReq != null && message.hasOwnProperty("joinRoomReq")) {
            properties.extension = 1;
            {
                var error = $root.JoinRoomRequest.verify(message.joinRoomReq);
                if (error)
                    return "joinRoomReq." + error;
            }
        }
        if (message.joinRoomResp != null && message.hasOwnProperty("joinRoomResp")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.JoinRoomResponse.verify(message.joinRoomResp);
                if (error)
                    return "joinRoomResp." + error;
            }
        }
        if (message.adjustCardReq != null && message.hasOwnProperty("adjustCardReq")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.AdjustCardRequest.verify(message.adjustCardReq);
                if (error)
                    return "adjustCardReq." + error;
            }
        }
        if (message.adjustCardResp != null && message.hasOwnProperty("adjustCardResp")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.AdjustCardResponse.verify(message.adjustCardResp);
                if (error)
                    return "adjustCardResp." + error;
            }
        }
        if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
        }
        if (message.pickCardReq != null && message.hasOwnProperty("pickCardReq")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.PickCardRequest.verify(message.pickCardReq);
                if (error)
                    return "pickCardReq." + error;
            }
        }
        if (message.getCardInfo != null && message.hasOwnProperty("getCardInfo")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.GetCard.verify(message.getCardInfo);
                if (error)
                    return "getCardInfo." + error;
            }
        }
        if (message.clearBoomReq != null && message.hasOwnProperty("clearBoomReq")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.ClearBoomRequest.verify(message.clearBoomReq);
                if (error)
                    return "clearBoomReq." + error;
            }
        }
        if (message.releaseCardReq != null && message.hasOwnProperty("releaseCardReq")) {
            if (properties.extension === 1)
                return "extension: multiple values";
            properties.extension = 1;
            {
                var error = $root.ReleaseCardRequest.verify(message.releaseCardReq);
                if (error)
                    return "releaseCardReq." + error;
            }
        }
        return null;
    };

    /**
     * CommandType enum.
     * @name Message.CommandType
     * @enum {number}
     * @property {number} NORMAL=0 NORMAL value
     * @property {number} HEARTBEAT_REQUEST=1 HEARTBEAT_REQUEST value
     * @property {number} HEARTBEAT_RESPONSE=2 HEARTBEAT_RESPONSE value
     * @property {number} JOIN_ROOM=3 JOIN_ROOM value
     * @property {number} HANDS_UPDATE=4 HANDS_UPDATE value
     * @property {number} ADJUST_CARD=5 ADJUST_CARD value
     * @property {number} ROOM_UPDATE=6 ROOM_UPDATE value
     * @property {number} PICK=7 PICK value
     * @property {number} RELEASE=8 RELEASE value
     * @property {number} CLEAR_BOOM=9 CLEAR_BOOM value
     * @property {number} TEST=100 TEST value
     */
    Message.CommandType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "HEARTBEAT_REQUEST"] = 1;
        values[valuesById[2] = "HEARTBEAT_RESPONSE"] = 2;
        values[valuesById[3] = "JOIN_ROOM"] = 3;
        values[valuesById[4] = "HANDS_UPDATE"] = 4;
        values[valuesById[5] = "ADJUST_CARD"] = 5;
        values[valuesById[6] = "ROOM_UPDATE"] = 6;
        values[valuesById[7] = "PICK"] = 7;
        values[valuesById[8] = "RELEASE"] = 8;
        values[valuesById[9] = "CLEAR_BOOM"] = 9;
        values[valuesById[100] = "TEST"] = 100;
        return values;
    })();

    return Message;
})();

$root.PickCardRequest = (function() {

    /**
     * Properties of a PickCardRequest.
     * @exports IPickCardRequest
     * @interface IPickCardRequest
     * @property {number|null} [userId] PickCardRequest userId
     * @property {string|null} [roomNo] PickCardRequest roomNo
     */

    /**
     * Constructs a new PickCardRequest.
     * @exports PickCardRequest
     * @classdesc Represents a PickCardRequest.
     * @implements IPickCardRequest
     * @constructor
     * @param {IPickCardRequest=} [properties] Properties to set
     */
    function PickCardRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PickCardRequest userId.
     * @member {number} userId
     * @memberof PickCardRequest
     * @instance
     */
    PickCardRequest.prototype.userId = 0;

    /**
     * PickCardRequest roomNo.
     * @member {string} roomNo
     * @memberof PickCardRequest
     * @instance
     */
    PickCardRequest.prototype.roomNo = "";

    /**
     * Creates a new PickCardRequest instance using the specified properties.
     * @function create
     * @memberof PickCardRequest
     * @static
     * @param {IPickCardRequest=} [properties] Properties to set
     * @returns {PickCardRequest} PickCardRequest instance
     */
    PickCardRequest.create = function create(properties) {
        return new PickCardRequest(properties);
    };

    /**
     * Encodes the specified PickCardRequest message. Does not implicitly {@link PickCardRequest.verify|verify} messages.
     * @function encode
     * @memberof PickCardRequest
     * @static
     * @param {IPickCardRequest} message PickCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PickCardRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomNo);
        return writer;
    };

    /**
     * Encodes the specified PickCardRequest message, length delimited. Does not implicitly {@link PickCardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PickCardRequest
     * @static
     * @param {IPickCardRequest} message PickCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PickCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PickCardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PickCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PickCardRequest} PickCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PickCardRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PickCardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                message.roomNo = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PickCardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PickCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PickCardRequest} PickCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PickCardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PickCardRequest message.
     * @function verify
     * @memberof PickCardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PickCardRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.roomNo != null && message.hasOwnProperty("roomNo"))
            if (!$util.isString(message.roomNo))
                return "roomNo: string expected";
        return null;
    };

    return PickCardRequest;
})();

$root.ReleaseCardRequest = (function() {

    /**
     * Properties of a ReleaseCardRequest.
     * @exports IReleaseCardRequest
     * @interface IReleaseCardRequest
     * @property {number|null} [userId] ReleaseCardRequest userId
     * @property {string|null} [roomNo] ReleaseCardRequest roomNo
     * @property {number|null} [cardId] ReleaseCardRequest cardId
     * @property {number|null} [targetId] ReleaseCardRequest targetId
     */

    /**
     * Constructs a new ReleaseCardRequest.
     * @exports ReleaseCardRequest
     * @classdesc Represents a ReleaseCardRequest.
     * @implements IReleaseCardRequest
     * @constructor
     * @param {IReleaseCardRequest=} [properties] Properties to set
     */
    function ReleaseCardRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReleaseCardRequest userId.
     * @member {number} userId
     * @memberof ReleaseCardRequest
     * @instance
     */
    ReleaseCardRequest.prototype.userId = 0;

    /**
     * ReleaseCardRequest roomNo.
     * @member {string} roomNo
     * @memberof ReleaseCardRequest
     * @instance
     */
    ReleaseCardRequest.prototype.roomNo = "";

    /**
     * ReleaseCardRequest cardId.
     * @member {number} cardId
     * @memberof ReleaseCardRequest
     * @instance
     */
    ReleaseCardRequest.prototype.cardId = 0;

    /**
     * ReleaseCardRequest targetId.
     * @member {number} targetId
     * @memberof ReleaseCardRequest
     * @instance
     */
    ReleaseCardRequest.prototype.targetId = 0;

    /**
     * Creates a new ReleaseCardRequest instance using the specified properties.
     * @function create
     * @memberof ReleaseCardRequest
     * @static
     * @param {IReleaseCardRequest=} [properties] Properties to set
     * @returns {ReleaseCardRequest} ReleaseCardRequest instance
     */
    ReleaseCardRequest.create = function create(properties) {
        return new ReleaseCardRequest(properties);
    };

    /**
     * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCardRequest.verify|verify} messages.
     * @function encode
     * @memberof ReleaseCardRequest
     * @static
     * @param {IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReleaseCardRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
        if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomNo);
        if (message.cardId != null && Object.hasOwnProperty.call(message, "cardId"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.cardId);
        if (message.targetId != null && Object.hasOwnProperty.call(message, "targetId"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.targetId);
        return writer;
    };

    /**
     * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReleaseCardRequest
     * @static
     * @param {IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReleaseCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReleaseCardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReleaseCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReleaseCardRequest} ReleaseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReleaseCardRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReleaseCardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.userId = reader.uint32();
                break;
            case 2:
                message.roomNo = reader.string();
                break;
            case 3:
                message.cardId = reader.uint32();
                break;
            case 4:
                message.targetId = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReleaseCardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReleaseCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReleaseCardRequest} ReleaseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReleaseCardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReleaseCardRequest message.
     * @function verify
     * @memberof ReleaseCardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReleaseCardRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isInteger(message.userId))
                return "userId: integer expected";
        if (message.roomNo != null && message.hasOwnProperty("roomNo"))
            if (!$util.isString(message.roomNo))
                return "roomNo: string expected";
        if (message.cardId != null && message.hasOwnProperty("cardId"))
            if (!$util.isInteger(message.cardId))
                return "cardId: integer expected";
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            if (!$util.isInteger(message.targetId))
                return "targetId: integer expected";
        return null;
    };

    return ReleaseCardRequest;
})();