var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
     * @property {number|null} [handsCnt] PlayerInfo handsCnt
     * @property {number|null} [attackMark] PlayerInfo attackMark
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
     * PlayerInfo handsCnt.
     * @member {number} handsCnt
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.handsCnt = 0;

    /**
     * PlayerInfo attackMark.
     * @member {number} attackMark
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.attackMark = 0;

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
        if (message.handsCnt != null && Object.hasOwnProperty.call(message, "handsCnt"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.handsCnt);
        if (message.attackMark != null && Object.hasOwnProperty.call(message, "attackMark"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.attackMark);
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
                message.handsCnt = reader.uint32();
                break;
            case 8:
                message.attackMark = reader.uint32();
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
        if (message.handsCnt != null && message.hasOwnProperty("handsCnt"))
            if (!$util.isInteger(message.handsCnt))
                return "handsCnt: integer expected";
        if (message.attackMark != null && message.hasOwnProperty("attackMark"))
            if (!$util.isInteger(message.attackMark))
                return "attackMark: integer expected";
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
     * @property {number|null} [stackCnt] RoomInfo stackCnt
     * @property {boolean|null} [clockwise] RoomInfo clockwise
     * @property {Array.<IPlayerInfo>|null} [players] RoomInfo players
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
     * RoomInfo stackCnt.
     * @member {number} stackCnt
     * @memberof RoomInfo
     * @instance
     */
    RoomInfo.prototype.stackCnt = 0;

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
        if (message.stackCnt != null && Object.hasOwnProperty.call(message, "stackCnt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.stackCnt);
        if (message.clockwise != null && Object.hasOwnProperty.call(message, "clockwise"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.clockwise);
        if (message.players != null && message.players.length)
            for (var i = 0; i < message.players.length; ++i)
                $root.PlayerInfo.encode(message.players[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                message.stackCnt = reader.int32();
                break;
            case 4:
                message.clockwise = reader.bool();
                break;
            case 5:
                if (!(message.players && message.players.length))
                    message.players = [];
                message.players.push($root.PlayerInfo.decode(reader, reader.uint32()));
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
        if (message.stackCnt != null && message.hasOwnProperty("stackCnt"))
            if (!$util.isInteger(message.stackCnt))
                return "stackCnt: integer expected";
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
        return null;
    };

    return RoomInfo;
})();

$root.Card = (function() {

    /**
     * Properties of a Card.
     * @exports ICard
     * @interface ICard
     * @property {number|null} [uid] Card uid
     * @property {number|null} [card] Card card
     * @property {Array.<number>|null} [target] Card target
     */

    /**
     * Constructs a new Card.
     * @exports Card
     * @classdesc Represents a Card.
     * @implements ICard
     * @constructor
     * @param {ICard=} [properties] Properties to set
     */
    function Card(properties) {
        this.target = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Card uid.
     * @member {number} uid
     * @memberof Card
     * @instance
     */
    Card.prototype.uid = 0;

    /**
     * Card card.
     * @member {number} card
     * @memberof Card
     * @instance
     */
    Card.prototype.card = 0;

    /**
     * Card target.
     * @member {Array.<number>} target
     * @memberof Card
     * @instance
     */
    Card.prototype.target = $util.emptyArray;

    /**
     * Creates a new Card instance using the specified properties.
     * @function create
     * @memberof Card
     * @static
     * @param {ICard=} [properties] Properties to set
     * @returns {Card} Card instance
     */
    Card.create = function create(properties) {
        return new Card(properties);
    };

    /**
     * Encodes the specified Card message. Does not implicitly {@link Card.verify|verify} messages.
     * @function encode
     * @memberof Card
     * @static
     * @param {ICard} message Card message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Card.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.uid);
        if (message.card != null && Object.hasOwnProperty.call(message, "card"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.card);
        if (message.target != null && message.target.length) {
            writer.uint32(/* id 3, wireType 2 =*/26).fork();
            for (var i = 0; i < message.target.length; ++i)
                writer.uint32(message.target[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified Card message, length delimited. Does not implicitly {@link Card.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Card
     * @static
     * @param {ICard} message Card message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Card.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Card message from the specified reader or buffer.
     * @function decode
     * @memberof Card
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Card} Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Card.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Card();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.uid = reader.uint32();
                break;
            case 2:
                message.card = reader.uint32();
                break;
            case 3:
                if (!(message.target && message.target.length))
                    message.target = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.target.push(reader.uint32());
                } else
                    message.target.push(reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Card message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Card
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Card} Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Card.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Card message.
     * @function verify
     * @memberof Card
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Card.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uid != null && message.hasOwnProperty("uid"))
            if (!$util.isInteger(message.uid))
                return "uid: integer expected";
        if (message.card != null && message.hasOwnProperty("card"))
            if (!$util.isInteger(message.card))
                return "card: integer expected";
        if (message.target != null && message.hasOwnProperty("target")) {
            if (!Array.isArray(message.target))
                return "target: array expected";
            for (var i = 0; i < message.target.length; ++i)
                if (!$util.isInteger(message.target[i]))
                    return "target: integer[] expected";
        }
        return null;
    };

    return Card;
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

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * Message extension.
     * @member {"joinRoomReq"|"joinRoomResp"|undefined} extension
     * @memberof Message
     * @instance
     */
    Object.defineProperty(Message.prototype, "extension", {
        get: $util.oneOfGetter($oneOfFields = ["joinRoomReq", "joinRoomResp"]),
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
     * @property {number} TEST=4 TEST value
     */
    Message.CommandType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NORMAL"] = 0;
        values[valuesById[1] = "HEARTBEAT_REQUEST"] = 1;
        values[valuesById[2] = "HEARTBEAT_RESPONSE"] = 2;
        values[valuesById[3] = "JOIN_ROOM"] = 3;
        values[valuesById[4] = "TEST"] = 4;
        return values;
    })();

    return Message;
})();