type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Properties of a PlayerInfo. */
export interface IPlayerInfo {

    /** PlayerInfo uid */
    uid?: (number|null);

    /** PlayerInfo isBot */
    isBot?: (boolean|null);

    /** PlayerInfo name */
    name?: (string|null);

    /** PlayerInfo state */
    state?: (number|null);

    /** PlayerInfo alive */
    alive?: (boolean|null);

    /** PlayerInfo avatar */
    avatar?: (string|null);

    /** PlayerInfo handsCnt */
    handsCnt?: (number|null);

    /** PlayerInfo attackMark */
    attackMark?: (number|null);
}

/** Represents a PlayerInfo. */
export class PlayerInfo implements IPlayerInfo {

    /**
     * Constructs a new PlayerInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerInfo);

    /** PlayerInfo uid. */
    public uid: number;

    /** PlayerInfo isBot. */
    public isBot: boolean;

    /** PlayerInfo name. */
    public name: string;

    /** PlayerInfo state. */
    public state: number;

    /** PlayerInfo alive. */
    public alive: boolean;

    /** PlayerInfo avatar. */
    public avatar: string;

    /** PlayerInfo handsCnt. */
    public handsCnt: number;

    /** PlayerInfo attackMark. */
    public attackMark: number;

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerInfo instance
     */
    public static create(properties?: IPlayerInfo): PlayerInfo;

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param message PlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @param message PlayerInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PlayerInfo;

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PlayerInfo;

    /**
     * Verifies a PlayerInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a RoomInfo. */
export interface IRoomInfo {

    /** RoomInfo no */
    no?: (string|null);

    /** RoomInfo state */
    state?: (number|null);

    /** RoomInfo stackCnt */
    stackCnt?: (number|null);

    /** RoomInfo clockwise */
    clockwise?: (boolean|null);

    /** RoomInfo players */
    players?: (IPlayerInfo[]|null);
}

/** Represents a RoomInfo. */
export class RoomInfo implements IRoomInfo {

    /**
     * Constructs a new RoomInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomInfo);

    /** RoomInfo no. */
    public no: string;

    /** RoomInfo state. */
    public state: number;

    /** RoomInfo stackCnt. */
    public stackCnt: number;

    /** RoomInfo clockwise. */
    public clockwise: boolean;

    /** RoomInfo players. */
    public players: IPlayerInfo[];

    /**
     * Creates a new RoomInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomInfo instance
     */
    public static create(properties?: IRoomInfo): RoomInfo;

    /**
     * Encodes the specified RoomInfo message. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link RoomInfo.verify|verify} messages.
     * @param message RoomInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): RoomInfo;

    /**
     * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): RoomInfo;

    /**
     * Verifies a RoomInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a Card. */
export interface ICard {

    /** Card uid */
    uid?: (number|null);

    /** Card card */
    card?: (number|null);

    /** Card target */
    target?: (number[]|null);
}

/** Represents a Card. */
export class Card implements ICard {

    /**
     * Constructs a new Card.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICard);

    /** Card uid. */
    public uid: number;

    /** Card card. */
    public card: number;

    /** Card target. */
    public target: number[];

    /**
     * Creates a new Card instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Card instance
     */
    public static create(properties?: ICard): Card;

    /**
     * Encodes the specified Card message. Does not implicitly {@link Card.verify|verify} messages.
     * @param message Card message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICard, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified Card message, length delimited. Does not implicitly {@link Card.verify|verify} messages.
     * @param message Card message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICard, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Card message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Card;

    /**
     * Decodes a Card message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Card
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Card;

    /**
     * Verifies a Card message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a JoinRoomRequest. */
export interface IJoinRoomRequest {

    /** JoinRoomRequest cookie */
    cookie?: (string|null);

    /** JoinRoomRequest wdh */
    wdh?: (number|null);

    /** JoinRoomRequest players */
    players?: (IPlayerInfo[]|null);

    /** JoinRoomRequest gameId */
    gameId?: (number|null);

    /** JoinRoomRequest roomNo */
    roomNo?: (string|null);

    /** JoinRoomRequest uid */
    uid?: (number|null);
}

/** Represents a JoinRoomRequest. */
export class JoinRoomRequest implements IJoinRoomRequest {

    /**
     * Constructs a new JoinRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoomRequest);

    /** JoinRoomRequest cookie. */
    public cookie: string;

    /** JoinRoomRequest wdh. */
    public wdh: number;

    /** JoinRoomRequest players. */
    public players: IPlayerInfo[];

    /** JoinRoomRequest gameId. */
    public gameId: number;

    /** JoinRoomRequest roomNo. */
    public roomNo: string;

    /** JoinRoomRequest uid. */
    public uid: number;

    /**
     * Creates a new JoinRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinRoomRequest instance
     */
    public static create(properties?: IJoinRoomRequest): JoinRoomRequest;

    /**
     * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @param message JoinRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoomRequest.verify|verify} messages.
     * @param message JoinRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): JoinRoomRequest;

    /**
     * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): JoinRoomRequest;

    /**
     * Verifies a JoinRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a JoinRoomResponse. */
export interface IJoinRoomResponse {

    /** JoinRoomResponse content */
    content?: (string|null);

    /** JoinRoomResponse roomInfo */
    roomInfo?: (IRoomInfo|null);
}

/** Represents a JoinRoomResponse. */
export class JoinRoomResponse implements IJoinRoomResponse {

    /**
     * Constructs a new JoinRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinRoomResponse);

    /** JoinRoomResponse content. */
    public content: string;

    /** JoinRoomResponse roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /**
     * Creates a new JoinRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinRoomResponse instance
     */
    public static create(properties?: IJoinRoomResponse): JoinRoomResponse;

    /**
     * Encodes the specified JoinRoomResponse message. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @param message JoinRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link JoinRoomResponse.verify|verify} messages.
     * @param message JoinRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): JoinRoomResponse;

    /**
     * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): JoinRoomResponse;

    /**
     * Verifies a JoinRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a Message. */
export interface IMessage {

    /** Message requestId */
    requestId?: (string|null);

    /** Message cmd */
    cmd?: (Message.CommandType|null);

    /** Message content */
    content?: (string|null);

    /** Message joinRoomReq */
    joinRoomReq?: (IJoinRoomRequest|null);

    /** Message joinRoomResp */
    joinRoomResp?: (IJoinRoomResponse|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message requestId. */
    public requestId: string;

    /** Message cmd. */
    public cmd: Message.CommandType;

    /** Message content. */
    public content: string;

    /** Message joinRoomReq. */
    public joinRoomReq?: (IJoinRoomRequest|null);

    /** Message joinRoomResp. */
    public joinRoomResp?: (IJoinRoomResponse|null);

    /** Message extension. */
    public extension?: ("joinRoomReq"|"joinRoomResp");

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

export declare namespace Message {

    /** CommandType enum. */
    enum CommandType {
        NORMAL = 0,
        HEARTBEAT_REQUEST = 1,
        HEARTBEAT_RESPONSE = 2,
        JOIN_ROOM = 3,
        TEST = 4
    }
}
