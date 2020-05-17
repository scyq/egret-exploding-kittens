var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AdjustCard = (function() {

    /**
     * Namespace AdjustCard.
     * @exports AdjustCard
     * @namespace
     */
    var AdjustCard = {};

    AdjustCard.AdjustCardRequest = (function() {

        /**
         * Properties of an AdjustCardRequest.
         * @memberof AdjustCard
         * @interface IAdjustCardRequest
         * @property {number|null} [userId] AdjustCardRequest userId
         * @property {string|null} [roomNo] AdjustCardRequest roomNo
         */

        /**
         * Constructs a new AdjustCardRequest.
         * @memberof AdjustCard
         * @classdesc Represents an AdjustCardRequest.
         * @implements IAdjustCardRequest
         * @constructor
         * @param {AdjustCard.IAdjustCardRequest=} [properties] Properties to set
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
         * @memberof AdjustCard.AdjustCardRequest
         * @instance
         */
        AdjustCardRequest.prototype.userId = 0;

        /**
         * AdjustCardRequest roomNo.
         * @member {string} roomNo
         * @memberof AdjustCard.AdjustCardRequest
         * @instance
         */
        AdjustCardRequest.prototype.roomNo = "";

        /**
         * Creates a new AdjustCardRequest instance using the specified properties.
         * @function create
         * @memberof AdjustCard.AdjustCardRequest
         * @static
         * @param {AdjustCard.IAdjustCardRequest=} [properties] Properties to set
         * @returns {AdjustCard.AdjustCardRequest} AdjustCardRequest instance
         */
        AdjustCardRequest.create = function create(properties) {
            return new AdjustCardRequest(properties);
        };

        /**
         * Encodes the specified AdjustCardRequest message. Does not implicitly {@link AdjustCard.AdjustCardRequest.verify|verify} messages.
         * @function encode
         * @memberof AdjustCard.AdjustCardRequest
         * @static
         * @param {AdjustCard.IAdjustCardRequest} message AdjustCardRequest message or plain object to encode
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
         * Encodes the specified AdjustCardRequest message, length delimited. Does not implicitly {@link AdjustCard.AdjustCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AdjustCard.AdjustCardRequest
         * @static
         * @param {AdjustCard.IAdjustCardRequest} message AdjustCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdjustCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdjustCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof AdjustCard.AdjustCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AdjustCard.AdjustCardRequest} AdjustCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdjustCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdjustCard.AdjustCardRequest();
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
         * @memberof AdjustCard.AdjustCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AdjustCard.AdjustCardRequest} AdjustCardRequest
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
         * @memberof AdjustCard.AdjustCardRequest
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

    AdjustCard.AdjustCardResponse = (function() {

        /**
         * Properties of an AdjustCardResponse.
         * @memberof AdjustCard
         * @interface IAdjustCardResponse
         * @property {string|null} [content] AdjustCardResponse content
         * @property {Common.IHandsInfo|null} [handsInfo] AdjustCardResponse handsInfo
         */

        /**
         * Constructs a new AdjustCardResponse.
         * @memberof AdjustCard
         * @classdesc Represents an AdjustCardResponse.
         * @implements IAdjustCardResponse
         * @constructor
         * @param {AdjustCard.IAdjustCardResponse=} [properties] Properties to set
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
         * @memberof AdjustCard.AdjustCardResponse
         * @instance
         */
        AdjustCardResponse.prototype.content = "";

        /**
         * AdjustCardResponse handsInfo.
         * @member {Common.IHandsInfo|null|undefined} handsInfo
         * @memberof AdjustCard.AdjustCardResponse
         * @instance
         */
        AdjustCardResponse.prototype.handsInfo = null;

        /**
         * Creates a new AdjustCardResponse instance using the specified properties.
         * @function create
         * @memberof AdjustCard.AdjustCardResponse
         * @static
         * @param {AdjustCard.IAdjustCardResponse=} [properties] Properties to set
         * @returns {AdjustCard.AdjustCardResponse} AdjustCardResponse instance
         */
        AdjustCardResponse.create = function create(properties) {
            return new AdjustCardResponse(properties);
        };

        /**
         * Encodes the specified AdjustCardResponse message. Does not implicitly {@link AdjustCard.AdjustCardResponse.verify|verify} messages.
         * @function encode
         * @memberof AdjustCard.AdjustCardResponse
         * @static
         * @param {AdjustCard.IAdjustCardResponse} message AdjustCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdjustCardResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.handsInfo != null && Object.hasOwnProperty.call(message, "handsInfo"))
                $root.Common.HandsInfo.encode(message.handsInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdjustCardResponse message, length delimited. Does not implicitly {@link AdjustCard.AdjustCardResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AdjustCard.AdjustCardResponse
         * @static
         * @param {AdjustCard.IAdjustCardResponse} message AdjustCardResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdjustCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdjustCardResponse message from the specified reader or buffer.
         * @function decode
         * @memberof AdjustCard.AdjustCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AdjustCard.AdjustCardResponse} AdjustCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdjustCardResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AdjustCard.AdjustCardResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.handsInfo = $root.Common.HandsInfo.decode(reader, reader.uint32());
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
         * @memberof AdjustCard.AdjustCardResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AdjustCard.AdjustCardResponse} AdjustCardResponse
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
         * @memberof AdjustCard.AdjustCardResponse
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
                var error = $root.Common.HandsInfo.verify(message.handsInfo);
                if (error)
                    return "handsInfo." + error;
            }
            return null;
        };

        return AdjustCardResponse;
    })();

    return AdjustCard;
})();

$root.Common = (function() {

    /**
     * Namespace Common.
     * @exports Common
     * @namespace
     */
    var Common = {};

    Common.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof Common
         * @interface IPlayerInfo
         * @property {number|null} [uid] PlayerInfo uid
         * @property {boolean|null} [isBot] PlayerInfo isBot
         * @property {string|null} [name] PlayerInfo name
         * @property {number|null} [state] PlayerInfo state
         * @property {boolean|null} [alive] PlayerInfo alive
         * @property {string|null} [avatar] PlayerInfo avatar
         * @property {Common.IHandsInfo|null} [handsInfo] PlayerInfo handsInfo
         * @property {number|null} [countDownTime] PlayerInfo countDownTime
         * @property {string|null} [buff] PlayerInfo buff
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof Common
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {Common.IPlayerInfo=} [properties] Properties to set
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
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.uid = 0;

        /**
         * PlayerInfo isBot.
         * @member {boolean} isBot
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isBot = false;

        /**
         * PlayerInfo name.
         * @member {string} name
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.name = "";

        /**
         * PlayerInfo state.
         * @member {number} state
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.state = 0;

        /**
         * PlayerInfo alive.
         * @member {boolean} alive
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.alive = false;

        /**
         * PlayerInfo avatar.
         * @member {string} avatar
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.avatar = "";

        /**
         * PlayerInfo handsInfo.
         * @member {Common.IHandsInfo|null|undefined} handsInfo
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.handsInfo = null;

        /**
         * PlayerInfo countDownTime.
         * @member {number} countDownTime
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.countDownTime = 0;

        /**
         * PlayerInfo buff.
         * @member {string} buff
         * @memberof Common.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.buff = "";

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo=} [properties] Properties to set
         * @returns {Common.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
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
                $root.Common.HandsInfo.encode(message.handsInfo, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.countDownTime != null && Object.hasOwnProperty.call(message, "countDownTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.countDownTime);
            if (message.buff != null && Object.hasOwnProperty.call(message, "buff"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.buff);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.PlayerInfo
         * @static
         * @param {Common.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.PlayerInfo();
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
                    message.handsInfo = $root.Common.HandsInfo.decode(reader, reader.uint32());
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
         * @memberof Common.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.PlayerInfo} PlayerInfo
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
         * @memberof Common.PlayerInfo
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
                var error = $root.Common.HandsInfo.verify(message.handsInfo);
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

    Common.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof Common
         * @interface IRoomInfo
         * @property {string|null} [no] RoomInfo no
         * @property {number|null} [state] RoomInfo state
         * @property {number|null} [stackCount] RoomInfo stackCount
         * @property {boolean|null} [clockwise] RoomInfo clockwise
         * @property {Array.<Common.IPlayerInfo>|null} [players] RoomInfo players
         * @property {Common.IDeckInfo|null} [deckInfo] RoomInfo deckInfo
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof Common
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {Common.IRoomInfo=} [properties] Properties to set
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
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.no = "";

        /**
         * RoomInfo state.
         * @member {number} state
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.state = 0;

        /**
         * RoomInfo stackCount.
         * @member {number} stackCount
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.stackCount = 0;

        /**
         * RoomInfo clockwise.
         * @member {boolean} clockwise
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.clockwise = false;

        /**
         * RoomInfo players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.players = $util.emptyArray;

        /**
         * RoomInfo deckInfo.
         * @member {Common.IDeckInfo|null|undefined} deckInfo
         * @memberof Common.RoomInfo
         * @instance
         */
        RoomInfo.prototype.deckInfo = null;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo=} [properties] Properties to set
         * @returns {Common.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo} message RoomInfo message or plain object to encode
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
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.deckInfo != null && Object.hasOwnProperty.call(message, "deckInfo"))
                $root.Common.DeckInfo.encode(message.deckInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.RoomInfo
         * @static
         * @param {Common.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.RoomInfo();
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
                    message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.deckInfo = $root.Common.DeckInfo.decode(reader, reader.uint32());
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
         * @memberof Common.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.RoomInfo} RoomInfo
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
         * @memberof Common.RoomInfo
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
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.deckInfo != null && message.hasOwnProperty("deckInfo")) {
                var error = $root.Common.DeckInfo.verify(message.deckInfo);
                if (error)
                    return "deckInfo." + error;
            }
            return null;
        };

        return RoomInfo;
    })();

    Common.DeckInfo = (function() {

        /**
         * Properties of a DeckInfo.
         * @memberof Common
         * @interface IDeckInfo
         * @property {number|null} [leftCount] DeckInfo leftCount
         * @property {number|null} [hit] DeckInfo hit
         * @property {string|null} [buff] DeckInfo buff
         */

        /**
         * Constructs a new DeckInfo.
         * @memberof Common
         * @classdesc Represents a DeckInfo.
         * @implements IDeckInfo
         * @constructor
         * @param {Common.IDeckInfo=} [properties] Properties to set
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
         * @memberof Common.DeckInfo
         * @instance
         */
        DeckInfo.prototype.leftCount = 0;

        /**
         * DeckInfo hit.
         * @member {number} hit
         * @memberof Common.DeckInfo
         * @instance
         */
        DeckInfo.prototype.hit = 0;

        /**
         * DeckInfo buff.
         * @member {string} buff
         * @memberof Common.DeckInfo
         * @instance
         */
        DeckInfo.prototype.buff = "";

        /**
         * Creates a new DeckInfo instance using the specified properties.
         * @function create
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo=} [properties] Properties to set
         * @returns {Common.DeckInfo} DeckInfo instance
         */
        DeckInfo.create = function create(properties) {
            return new DeckInfo(properties);
        };

        /**
         * Encodes the specified DeckInfo message. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo} message DeckInfo message or plain object to encode
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
         * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.DeckInfo
         * @static
         * @param {Common.IDeckInfo} message DeckInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeckInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeckInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.DeckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.DeckInfo} DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeckInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.DeckInfo();
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
         * @memberof Common.DeckInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.DeckInfo} DeckInfo
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
         * @memberof Common.DeckInfo
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

    Common.CardInfo = (function() {

        /**
         * Properties of a CardInfo.
         * @memberof Common
         * @interface ICardInfo
         * @property {number|null} [id] CardInfo id
         * @property {string|null} [name] CardInfo name
         * @property {string|null} [icon] CardInfo icon
         */

        /**
         * Constructs a new CardInfo.
         * @memberof Common
         * @classdesc Represents a CardInfo.
         * @implements ICardInfo
         * @constructor
         * @param {Common.ICardInfo=} [properties] Properties to set
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
         * @memberof Common.CardInfo
         * @instance
         */
        CardInfo.prototype.id = 0;

        /**
         * CardInfo name.
         * @member {string} name
         * @memberof Common.CardInfo
         * @instance
         */
        CardInfo.prototype.name = "";

        /**
         * CardInfo icon.
         * @member {string} icon
         * @memberof Common.CardInfo
         * @instance
         */
        CardInfo.prototype.icon = "";

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @function create
         * @memberof Common.CardInfo
         * @static
         * @param {Common.ICardInfo=} [properties] Properties to set
         * @returns {Common.CardInfo} CardInfo instance
         */
        CardInfo.create = function create(properties) {
            return new CardInfo(properties);
        };

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link Common.CardInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.CardInfo
         * @static
         * @param {Common.ICardInfo} message CardInfo message or plain object to encode
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
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link Common.CardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.CardInfo
         * @static
         * @param {Common.ICardInfo} message CardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.CardInfo} CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.CardInfo();
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
         * @memberof Common.CardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.CardInfo} CardInfo
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
         * @memberof Common.CardInfo
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

    Common.HandsInfo = (function() {

        /**
         * Properties of a HandsInfo.
         * @memberof Common
         * @interface IHandsInfo
         * @property {number|null} [uid] HandsInfo uid
         * @property {Array.<Common.ICardInfo>|null} [cardInfos] HandsInfo cardInfos
         * @property {number|null} [mulliganCnt] HandsInfo mulliganCnt
         * @property {number|Long|null} [mulliganExpireTime] HandsInfo mulliganExpireTime
         */

        /**
         * Constructs a new HandsInfo.
         * @memberof Common
         * @classdesc Represents a HandsInfo.
         * @implements IHandsInfo
         * @constructor
         * @param {Common.IHandsInfo=} [properties] Properties to set
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
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.uid = 0;

        /**
         * HandsInfo cardInfos.
         * @member {Array.<Common.ICardInfo>} cardInfos
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.cardInfos = $util.emptyArray;

        /**
         * HandsInfo mulliganCnt.
         * @member {number} mulliganCnt
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.mulliganCnt = 0;

        /**
         * HandsInfo mulliganExpireTime.
         * @member {number|Long} mulliganExpireTime
         * @memberof Common.HandsInfo
         * @instance
         */
        HandsInfo.prototype.mulliganExpireTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new HandsInfo instance using the specified properties.
         * @function create
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo=} [properties] Properties to set
         * @returns {Common.HandsInfo} HandsInfo instance
         */
        HandsInfo.create = function create(properties) {
            return new HandsInfo(properties);
        };

        /**
         * Encodes the specified HandsInfo message. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @function encode
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo} message HandsInfo message or plain object to encode
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
                    $root.Common.CardInfo.encode(message.cardInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.mulliganCnt != null && Object.hasOwnProperty.call(message, "mulliganCnt"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.mulliganCnt);
            if (message.mulliganExpireTime != null && Object.hasOwnProperty.call(message, "mulliganExpireTime"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.mulliganExpireTime);
            return writer;
        };

        /**
         * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.HandsInfo
         * @static
         * @param {Common.IHandsInfo} message HandsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandsInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof Common.HandsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.HandsInfo} HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandsInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.HandsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.uint32();
                    break;
                case 2:
                    if (!(message.cardInfos && message.cardInfos.length))
                        message.cardInfos = [];
                    message.cardInfos.push($root.Common.CardInfo.decode(reader, reader.uint32()));
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
         * @memberof Common.HandsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.HandsInfo} HandsInfo
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
         * @memberof Common.HandsInfo
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
                    var error = $root.Common.CardInfo.verify(message.cardInfos[i]);
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

    Common.GetCard = (function() {

        /**
         * Properties of a GetCard.
         * @memberof Common
         * @interface IGetCard
         * @property {number|null} [userId] GetCard userId
         * @property {Array.<Common.ICardInfo>|null} [newCard] GetCard newCard
         */

        /**
         * Constructs a new GetCard.
         * @memberof Common
         * @classdesc Represents a GetCard.
         * @implements IGetCard
         * @constructor
         * @param {Common.IGetCard=} [properties] Properties to set
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
         * @memberof Common.GetCard
         * @instance
         */
        GetCard.prototype.userId = 0;

        /**
         * GetCard newCard.
         * @member {Array.<Common.ICardInfo>} newCard
         * @memberof Common.GetCard
         * @instance
         */
        GetCard.prototype.newCard = $util.emptyArray;

        /**
         * Creates a new GetCard instance using the specified properties.
         * @function create
         * @memberof Common.GetCard
         * @static
         * @param {Common.IGetCard=} [properties] Properties to set
         * @returns {Common.GetCard} GetCard instance
         */
        GetCard.create = function create(properties) {
            return new GetCard(properties);
        };

        /**
         * Encodes the specified GetCard message. Does not implicitly {@link Common.GetCard.verify|verify} messages.
         * @function encode
         * @memberof Common.GetCard
         * @static
         * @param {Common.IGetCard} message GetCard message or plain object to encode
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
                    $root.Common.CardInfo.encode(message.newCard[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetCard message, length delimited. Does not implicitly {@link Common.GetCard.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Common.GetCard
         * @static
         * @param {Common.IGetCard} message GetCard message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetCard.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetCard message from the specified reader or buffer.
         * @function decode
         * @memberof Common.GetCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Common.GetCard} GetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetCard.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Common.GetCard();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    if (!(message.newCard && message.newCard.length))
                        message.newCard = [];
                    message.newCard.push($root.Common.CardInfo.decode(reader, reader.uint32()));
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
         * @memberof Common.GetCard
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Common.GetCard} GetCard
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
         * @memberof Common.GetCard
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
                    var error = $root.Common.CardInfo.verify(message.newCard[i]);
                    if (error)
                        return "newCard." + error;
                }
            }
            return null;
        };

        return GetCard;
    })();

    return Common;
})();

$root.ClearBoom = (function() {

    /**
     * Namespace ClearBoom.
     * @exports ClearBoom
     * @namespace
     */
    var ClearBoom = {};

    ClearBoom.ClearBoomRequest = (function() {

        /**
         * Properties of a ClearBoomRequest.
         * @memberof ClearBoom
         * @interface IClearBoomRequest
         * @property {number|null} [userId] ClearBoomRequest userId
         * @property {string|null} [roomNo] ClearBoomRequest roomNo
         * @property {number|null} [returnPos] ClearBoomRequest returnPos
         */

        /**
         * Constructs a new ClearBoomRequest.
         * @memberof ClearBoom
         * @classdesc Represents a ClearBoomRequest.
         * @implements IClearBoomRequest
         * @constructor
         * @param {ClearBoom.IClearBoomRequest=} [properties] Properties to set
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
         * @memberof ClearBoom.ClearBoomRequest
         * @instance
         */
        ClearBoomRequest.prototype.userId = 0;

        /**
         * ClearBoomRequest roomNo.
         * @member {string} roomNo
         * @memberof ClearBoom.ClearBoomRequest
         * @instance
         */
        ClearBoomRequest.prototype.roomNo = "";

        /**
         * ClearBoomRequest returnPos.
         * @member {number} returnPos
         * @memberof ClearBoom.ClearBoomRequest
         * @instance
         */
        ClearBoomRequest.prototype.returnPos = 0;

        /**
         * Creates a new ClearBoomRequest instance using the specified properties.
         * @function create
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest=} [properties] Properties to set
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest instance
         */
        ClearBoomRequest.create = function create(properties) {
            return new ClearBoomRequest(properties);
        };

        /**
         * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @function encode
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest} message ClearBoomRequest message or plain object to encode
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
         * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {ClearBoom.IClearBoomRequest} message ClearBoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearBoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearBoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClearBoom.ClearBoomRequest();
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
         * @memberof ClearBoom.ClearBoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClearBoom.ClearBoomRequest} ClearBoomRequest
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
         * @memberof ClearBoom.ClearBoomRequest
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

    return ClearBoom;
})();

$root.JoinRoom = (function() {

    /**
     * Namespace JoinRoom.
     * @exports JoinRoom
     * @namespace
     */
    var JoinRoom = {};

    JoinRoom.JoinRoomRequest = (function() {

        /**
         * Properties of a JoinRoomRequest.
         * @memberof JoinRoom
         * @interface IJoinRoomRequest
         * @property {string|null} [cookie] JoinRoomRequest cookie
         * @property {number|null} [wdh] JoinRoomRequest wdh
         * @property {Array.<Common.IPlayerInfo>|null} [players] JoinRoomRequest players
         * @property {number|null} [gameId] JoinRoomRequest gameId
         * @property {string|null} [roomNo] JoinRoomRequest roomNo
         * @property {number|null} [uid] JoinRoomRequest uid
         */

        /**
         * Constructs a new JoinRoomRequest.
         * @memberof JoinRoom
         * @classdesc Represents a JoinRoomRequest.
         * @implements IJoinRoomRequest
         * @constructor
         * @param {JoinRoom.IJoinRoomRequest=} [properties] Properties to set
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
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.cookie = "";

        /**
         * JoinRoomRequest wdh.
         * @member {number} wdh
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.wdh = 0;

        /**
         * JoinRoomRequest players.
         * @member {Array.<Common.IPlayerInfo>} players
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.players = $util.emptyArray;

        /**
         * JoinRoomRequest gameId.
         * @member {number} gameId
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.gameId = 0;

        /**
         * JoinRoomRequest roomNo.
         * @member {string} roomNo
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.roomNo = "";

        /**
         * JoinRoomRequest uid.
         * @member {number} uid
         * @memberof JoinRoom.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.uid = 0;

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @function create
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest=} [properties] Properties to set
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest instance
         */
        JoinRoomRequest.create = function create(properties) {
            return new JoinRoomRequest(properties);
        };

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
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
                    $root.Common.PlayerInfo.encode(message.players[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.gameId);
            if (message.roomNo != null && Object.hasOwnProperty.call(message, "roomNo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.roomNo);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.uid);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {JoinRoom.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoom.JoinRoomRequest();
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
                    message.players.push($root.Common.PlayerInfo.decode(reader, reader.uint32()));
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
         * @memberof JoinRoom.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JoinRoom.JoinRoomRequest} JoinRoomRequest
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
         * @memberof JoinRoom.JoinRoomRequest
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
                    var error = $root.Common.PlayerInfo.verify(message.players[i]);
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

    JoinRoom.JoinRoomResponse = (function() {

        /**
         * Properties of a JoinRoomResponse.
         * @memberof JoinRoom
         * @interface IJoinRoomResponse
         * @property {string|null} [content] JoinRoomResponse content
         * @property {Common.IRoomInfo|null} [roomInfo] JoinRoomResponse roomInfo
         */

        /**
         * Constructs a new JoinRoomResponse.
         * @memberof JoinRoom
         * @classdesc Represents a JoinRoomResponse.
         * @implements IJoinRoomResponse
         * @constructor
         * @param {JoinRoom.IJoinRoomResponse=} [properties] Properties to set
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
         * @memberof JoinRoom.JoinRoomResponse
         * @instance
         */
        JoinRoomResponse.prototype.content = "";

        /**
         * JoinRoomResponse roomInfo.
         * @member {Common.IRoomInfo|null|undefined} roomInfo
         * @memberof JoinRoom.JoinRoomResponse
         * @instance
         */
        JoinRoomResponse.prototype.roomInfo = null;

        /**
         * Creates a new JoinRoomResponse instance using the specified properties.
         * @function create
         * @memberof JoinRoom.JoinRoomResponse
         * @static
         * @param {JoinRoom.IJoinRoomResponse=} [properties] Properties to set
         * @returns {JoinRoom.JoinRoomResponse} JoinRoomResponse instance
         */
        JoinRoomResponse.create = function create(properties) {
            return new JoinRoomResponse(properties);
        };

        /**
         * Encodes the specified JoinRoomResponse message. Does not implicitly {@link JoinRoom.JoinRoomResponse.verify|verify} messages.
         * @function encode
         * @memberof JoinRoom.JoinRoomResponse
         * @static
         * @param {JoinRoom.IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.Common.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof JoinRoom.JoinRoomResponse
         * @static
         * @param {JoinRoom.IJoinRoomResponse} message JoinRoomResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer.
         * @function decode
         * @memberof JoinRoom.JoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {JoinRoom.JoinRoomResponse} JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.JoinRoom.JoinRoomResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                case 2:
                    message.roomInfo = $root.Common.RoomInfo.decode(reader, reader.uint32());
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
         * @memberof JoinRoom.JoinRoomResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {JoinRoom.JoinRoomResponse} JoinRoomResponse
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
         * @memberof JoinRoom.JoinRoomResponse
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
                var error = $root.Common.RoomInfo.verify(message.roomInfo);
                if (error)
                    return "roomInfo." + error;
            }
            return null;
        };

        return JoinRoomResponse;
    })();

    return JoinRoom;
})();

$root.Msg = (function() {

    /**
     * Namespace Msg.
     * @exports Msg
     * @namespace
     */
    var Msg = {};

    Msg.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof Msg
         * @interface IMessage
         * @property {string|null} [requestId] Message requestId
         * @property {Msg.Message.CommandType|null} [cmd] Message cmd
         * @property {string|null} [content] Message content
         * @property {JoinRoom.IJoinRoomRequest|null} [joinRoomReq] Message joinRoomReq
         * @property {JoinRoom.IJoinRoomResponse|null} [joinRoomResp] Message joinRoomResp
         * @property {AdjustCard.IAdjustCardRequest|null} [adjustCardReq] Message adjustCardReq
         * @property {AdjustCard.IAdjustCardResponse|null} [adjustCardResp] Message adjustCardResp
         * @property {Common.IRoomInfo|null} [roomInfo] Message roomInfo
         * @property {PickCard.IPickCardRequest|null} [pickCardReq] Message pickCardReq
         * @property {Common.IGetCard|null} [getCardInfo] Message getCardInfo
         * @property {ClearBoom.IClearBoomRequest|null} [clearBoomReq] Message clearBoomReq
         * @property {ReleaseCard.IReleaseCardRequest|null} [releaseCardReq] Message releaseCardReq
         */

        /**
         * Constructs a new Message.
         * @memberof Msg
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {Msg.IMessage=} [properties] Properties to set
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
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.requestId = "";

        /**
         * Message cmd.
         * @member {Msg.Message.CommandType} cmd
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.cmd = 0;

        /**
         * Message content.
         * @member {string} content
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Message joinRoomReq.
         * @member {JoinRoom.IJoinRoomRequest|null|undefined} joinRoomReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.joinRoomReq = null;

        /**
         * Message joinRoomResp.
         * @member {JoinRoom.IJoinRoomResponse|null|undefined} joinRoomResp
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.joinRoomResp = null;

        /**
         * Message adjustCardReq.
         * @member {AdjustCard.IAdjustCardRequest|null|undefined} adjustCardReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.adjustCardReq = null;

        /**
         * Message adjustCardResp.
         * @member {AdjustCard.IAdjustCardResponse|null|undefined} adjustCardResp
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.adjustCardResp = null;

        /**
         * Message roomInfo.
         * @member {Common.IRoomInfo|null|undefined} roomInfo
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.roomInfo = null;

        /**
         * Message pickCardReq.
         * @member {PickCard.IPickCardRequest|null|undefined} pickCardReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.pickCardReq = null;

        /**
         * Message getCardInfo.
         * @member {Common.IGetCard|null|undefined} getCardInfo
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.getCardInfo = null;

        /**
         * Message clearBoomReq.
         * @member {ClearBoom.IClearBoomRequest|null|undefined} clearBoomReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.clearBoomReq = null;

        /**
         * Message releaseCardReq.
         * @member {ReleaseCard.IReleaseCardRequest|null|undefined} releaseCardReq
         * @memberof Msg.Message
         * @instance
         */
        Message.prototype.releaseCardReq = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message extension.
         * @member {"joinRoomReq"|"joinRoomResp"|"adjustCardReq"|"adjustCardResp"|"roomInfo"|"pickCardReq"|"getCardInfo"|"clearBoomReq"|"releaseCardReq"|undefined} extension
         * @memberof Msg.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "extension", {
            get: $util.oneOfGetter($oneOfFields = ["joinRoomReq", "joinRoomResp", "adjustCardReq", "adjustCardResp", "roomInfo", "pickCardReq", "getCardInfo", "clearBoomReq", "releaseCardReq"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage=} [properties] Properties to set
         * @returns {Msg.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @function encode
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage} message Message message or plain object to encode
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
                $root.JoinRoom.JoinRoomRequest.encode(message.joinRoomReq, writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message.joinRoomResp != null && Object.hasOwnProperty.call(message, "joinRoomResp"))
                $root.JoinRoom.JoinRoomResponse.encode(message.joinRoomResp, writer.uint32(/* id 102, wireType 2 =*/818).fork()).ldelim();
            if (message.adjustCardReq != null && Object.hasOwnProperty.call(message, "adjustCardReq"))
                $root.AdjustCard.AdjustCardRequest.encode(message.adjustCardReq, writer.uint32(/* id 103, wireType 2 =*/826).fork()).ldelim();
            if (message.adjustCardResp != null && Object.hasOwnProperty.call(message, "adjustCardResp"))
                $root.AdjustCard.AdjustCardResponse.encode(message.adjustCardResp, writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            if (message.roomInfo != null && Object.hasOwnProperty.call(message, "roomInfo"))
                $root.Common.RoomInfo.encode(message.roomInfo, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
            if (message.pickCardReq != null && Object.hasOwnProperty.call(message, "pickCardReq"))
                $root.PickCard.PickCardRequest.encode(message.pickCardReq, writer.uint32(/* id 106, wireType 2 =*/850).fork()).ldelim();
            if (message.getCardInfo != null && Object.hasOwnProperty.call(message, "getCardInfo"))
                $root.Common.GetCard.encode(message.getCardInfo, writer.uint32(/* id 107, wireType 2 =*/858).fork()).ldelim();
            if (message.clearBoomReq != null && Object.hasOwnProperty.call(message, "clearBoomReq"))
                $root.ClearBoom.ClearBoomRequest.encode(message.clearBoomReq, writer.uint32(/* id 108, wireType 2 =*/866).fork()).ldelim();
            if (message.releaseCardReq != null && Object.hasOwnProperty.call(message, "releaseCardReq"))
                $root.ReleaseCard.ReleaseCardRequest.encode(message.releaseCardReq, writer.uint32(/* id 109, wireType 2 =*/874).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Msg.Message
         * @static
         * @param {Msg.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof Msg.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Msg.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Msg.Message();
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
                    message.joinRoomReq = $root.JoinRoom.JoinRoomRequest.decode(reader, reader.uint32());
                    break;
                case 102:
                    message.joinRoomResp = $root.JoinRoom.JoinRoomResponse.decode(reader, reader.uint32());
                    break;
                case 103:
                    message.adjustCardReq = $root.AdjustCard.AdjustCardRequest.decode(reader, reader.uint32());
                    break;
                case 104:
                    message.adjustCardResp = $root.AdjustCard.AdjustCardResponse.decode(reader, reader.uint32());
                    break;
                case 105:
                    message.roomInfo = $root.Common.RoomInfo.decode(reader, reader.uint32());
                    break;
                case 106:
                    message.pickCardReq = $root.PickCard.PickCardRequest.decode(reader, reader.uint32());
                    break;
                case 107:
                    message.getCardInfo = $root.Common.GetCard.decode(reader, reader.uint32());
                    break;
                case 108:
                    message.clearBoomReq = $root.ClearBoom.ClearBoomRequest.decode(reader, reader.uint32());
                    break;
                case 109:
                    message.releaseCardReq = $root.ReleaseCard.ReleaseCardRequest.decode(reader, reader.uint32());
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
         * @memberof Msg.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Msg.Message} Message
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
         * @memberof Msg.Message
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
                    var error = $root.JoinRoom.JoinRoomRequest.verify(message.joinRoomReq);
                    if (error)
                        return "joinRoomReq." + error;
                }
            }
            if (message.joinRoomResp != null && message.hasOwnProperty("joinRoomResp")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.JoinRoom.JoinRoomResponse.verify(message.joinRoomResp);
                    if (error)
                        return "joinRoomResp." + error;
                }
            }
            if (message.adjustCardReq != null && message.hasOwnProperty("adjustCardReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.AdjustCard.AdjustCardRequest.verify(message.adjustCardReq);
                    if (error)
                        return "adjustCardReq." + error;
                }
            }
            if (message.adjustCardResp != null && message.hasOwnProperty("adjustCardResp")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.AdjustCard.AdjustCardResponse.verify(message.adjustCardResp);
                    if (error)
                        return "adjustCardResp." + error;
                }
            }
            if (message.roomInfo != null && message.hasOwnProperty("roomInfo")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.RoomInfo.verify(message.roomInfo);
                    if (error)
                        return "roomInfo." + error;
                }
            }
            if (message.pickCardReq != null && message.hasOwnProperty("pickCardReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.PickCard.PickCardRequest.verify(message.pickCardReq);
                    if (error)
                        return "pickCardReq." + error;
                }
            }
            if (message.getCardInfo != null && message.hasOwnProperty("getCardInfo")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.Common.GetCard.verify(message.getCardInfo);
                    if (error)
                        return "getCardInfo." + error;
                }
            }
            if (message.clearBoomReq != null && message.hasOwnProperty("clearBoomReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.ClearBoom.ClearBoomRequest.verify(message.clearBoomReq);
                    if (error)
                        return "clearBoomReq." + error;
                }
            }
            if (message.releaseCardReq != null && message.hasOwnProperty("releaseCardReq")) {
                if (properties.extension === 1)
                    return "extension: multiple values";
                properties.extension = 1;
                {
                    var error = $root.ReleaseCard.ReleaseCardRequest.verify(message.releaseCardReq);
                    if (error)
                        return "releaseCardReq." + error;
                }
            }
            return null;
        };

        /**
         * CommandType enum.
         * @name Msg.Message.CommandType
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

    return Msg;
})();

$root.PickCard = (function() {

    /**
     * Namespace PickCard.
     * @exports PickCard
     * @namespace
     */
    var PickCard = {};

    PickCard.PickCardRequest = (function() {

        /**
         * Properties of a PickCardRequest.
         * @memberof PickCard
         * @interface IPickCardRequest
         * @property {number|null} [userId] PickCardRequest userId
         * @property {string|null} [roomNo] PickCardRequest roomNo
         */

        /**
         * Constructs a new PickCardRequest.
         * @memberof PickCard
         * @classdesc Represents a PickCardRequest.
         * @implements IPickCardRequest
         * @constructor
         * @param {PickCard.IPickCardRequest=} [properties] Properties to set
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
         * @memberof PickCard.PickCardRequest
         * @instance
         */
        PickCardRequest.prototype.userId = 0;

        /**
         * PickCardRequest roomNo.
         * @member {string} roomNo
         * @memberof PickCard.PickCardRequest
         * @instance
         */
        PickCardRequest.prototype.roomNo = "";

        /**
         * Creates a new PickCardRequest instance using the specified properties.
         * @function create
         * @memberof PickCard.PickCardRequest
         * @static
         * @param {PickCard.IPickCardRequest=} [properties] Properties to set
         * @returns {PickCard.PickCardRequest} PickCardRequest instance
         */
        PickCardRequest.create = function create(properties) {
            return new PickCardRequest(properties);
        };

        /**
         * Encodes the specified PickCardRequest message. Does not implicitly {@link PickCard.PickCardRequest.verify|verify} messages.
         * @function encode
         * @memberof PickCard.PickCardRequest
         * @static
         * @param {PickCard.IPickCardRequest} message PickCardRequest message or plain object to encode
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
         * Encodes the specified PickCardRequest message, length delimited. Does not implicitly {@link PickCard.PickCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PickCard.PickCardRequest
         * @static
         * @param {PickCard.IPickCardRequest} message PickCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PickCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof PickCard.PickCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PickCard.PickCardRequest} PickCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PickCard.PickCardRequest();
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
         * @memberof PickCard.PickCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PickCard.PickCardRequest} PickCardRequest
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
         * @memberof PickCard.PickCardRequest
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

    return PickCard;
})();

$root.ReleaseCard = (function() {

    /**
     * Namespace ReleaseCard.
     * @exports ReleaseCard
     * @namespace
     */
    var ReleaseCard = {};

    ReleaseCard.ReleaseCardRequest = (function() {

        /**
         * Properties of a ReleaseCardRequest.
         * @memberof ReleaseCard
         * @interface IReleaseCardRequest
         * @property {number|null} [userId] ReleaseCardRequest userId
         * @property {string|null} [roomNo] ReleaseCardRequest roomNo
         * @property {number|null} [cardId] ReleaseCardRequest cardId
         * @property {number|null} [targetId] ReleaseCardRequest targetId
         */

        /**
         * Constructs a new ReleaseCardRequest.
         * @memberof ReleaseCard
         * @classdesc Represents a ReleaseCardRequest.
         * @implements IReleaseCardRequest
         * @constructor
         * @param {ReleaseCard.IReleaseCardRequest=} [properties] Properties to set
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
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.userId = 0;

        /**
         * ReleaseCardRequest roomNo.
         * @member {string} roomNo
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.roomNo = "";

        /**
         * ReleaseCardRequest cardId.
         * @member {number} cardId
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.cardId = 0;

        /**
         * ReleaseCardRequest targetId.
         * @member {number} targetId
         * @memberof ReleaseCard.ReleaseCardRequest
         * @instance
         */
        ReleaseCardRequest.prototype.targetId = 0;

        /**
         * Creates a new ReleaseCardRequest instance using the specified properties.
         * @function create
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest=} [properties] Properties to set
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest instance
         */
        ReleaseCardRequest.create = function create(properties) {
            return new ReleaseCardRequest(properties);
        };

        /**
         * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @function encode
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
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
         * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {ReleaseCard.IReleaseCardRequest} message ReleaseCardRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReleaseCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReleaseCardRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReleaseCard.ReleaseCardRequest();
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
         * @memberof ReleaseCard.ReleaseCardRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ReleaseCard.ReleaseCardRequest} ReleaseCardRequest
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
         * @memberof ReleaseCard.ReleaseCardRequest
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

    return ReleaseCard;
})();