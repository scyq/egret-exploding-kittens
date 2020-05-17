type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Properties of an AdjustCardRequest. */
export interface IAdjustCardRequest {

    /** AdjustCardRequest userId */
    userId?: (number|null);

    /** AdjustCardRequest roomNo */
    roomNo?: (string|null);
}

/** Represents an AdjustCardRequest. */
export class AdjustCardRequest implements IAdjustCardRequest {

    /**
     * Constructs a new AdjustCardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdjustCardRequest);

    /** AdjustCardRequest userId. */
    public userId: number;

    /** AdjustCardRequest roomNo. */
    public roomNo: string;

    /**
     * Creates a new AdjustCardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdjustCardRequest instance
     */
    public static create(properties?: IAdjustCardRequest): AdjustCardRequest;

    /**
     * Encodes the specified AdjustCardRequest message. Does not implicitly {@link AdjustCardRequest.verify|verify} messages.
     * @param message AdjustCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdjustCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified AdjustCardRequest message, length delimited. Does not implicitly {@link AdjustCardRequest.verify|verify} messages.
     * @param message AdjustCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdjustCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AdjustCardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdjustCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): AdjustCardRequest;

    /**
     * Decodes an AdjustCardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdjustCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): AdjustCardRequest;

    /**
     * Verifies an AdjustCardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of an AdjustCardResponse. */
export interface IAdjustCardResponse {

    /** AdjustCardResponse content */
    content?: (string|null);

    /** AdjustCardResponse handsInfo */
    handsInfo?: (IHandsInfo|null);
}

/** Represents an AdjustCardResponse. */
export class AdjustCardResponse implements IAdjustCardResponse {

    /**
     * Constructs a new AdjustCardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAdjustCardResponse);

    /** AdjustCardResponse content. */
    public content: string;

    /** AdjustCardResponse handsInfo. */
    public handsInfo?: (IHandsInfo|null);

    /**
     * Creates a new AdjustCardResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdjustCardResponse instance
     */
    public static create(properties?: IAdjustCardResponse): AdjustCardResponse;

    /**
     * Encodes the specified AdjustCardResponse message. Does not implicitly {@link AdjustCardResponse.verify|verify} messages.
     * @param message AdjustCardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAdjustCardResponse, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified AdjustCardResponse message, length delimited. Does not implicitly {@link AdjustCardResponse.verify|verify} messages.
     * @param message AdjustCardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAdjustCardResponse, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes an AdjustCardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdjustCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): AdjustCardResponse;

    /**
     * Decodes an AdjustCardResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdjustCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): AdjustCardResponse;

    /**
     * Verifies an AdjustCardResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

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

    /** PlayerInfo handsInfo */
    handsInfo?: (IHandsInfo|null);

    /** PlayerInfo countDownTime */
    countDownTime?: (number|null);

    /** PlayerInfo buff */
    buff?: (string|null);
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

    /** PlayerInfo handsInfo. */
    public handsInfo?: (IHandsInfo|null);

    /** PlayerInfo countDownTime. */
    public countDownTime: number;

    /** PlayerInfo buff. */
    public buff: string;

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

    /** RoomInfo stackCount */
    stackCount?: (number|null);

    /** RoomInfo clockwise */
    clockwise?: (boolean|null);

    /** RoomInfo players */
    players?: (IPlayerInfo[]|null);

    /** RoomInfo deckInfo */
    deckInfo?: (IDeckInfo|null);
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

    /** RoomInfo stackCount. */
    public stackCount: number;

    /** RoomInfo clockwise. */
    public clockwise: boolean;

    /** RoomInfo players. */
    public players: IPlayerInfo[];

    /** RoomInfo deckInfo. */
    public deckInfo?: (IDeckInfo|null);

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

/** Properties of a DeckInfo. */
export interface IDeckInfo {

    /** DeckInfo leftCount */
    leftCount?: (number|null);

    /** DeckInfo hit */
    hit?: (number|null);

    /** DeckInfo buff */
    buff?: (string|null);
}

/** Represents a DeckInfo. */
export class DeckInfo implements IDeckInfo {

    /**
     * Constructs a new DeckInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeckInfo);

    /** DeckInfo leftCount. */
    public leftCount: number;

    /** DeckInfo hit. */
    public hit: number;

    /** DeckInfo buff. */
    public buff: string;

    /**
     * Creates a new DeckInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeckInfo instance
     */
    public static create(properties?: IDeckInfo): DeckInfo;

    /**
     * Encodes the specified DeckInfo message. Does not implicitly {@link DeckInfo.verify|verify} messages.
     * @param message DeckInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link DeckInfo.verify|verify} messages.
     * @param message DeckInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a DeckInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeckInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): DeckInfo;

    /**
     * Decodes a DeckInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeckInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): DeckInfo;

    /**
     * Verifies a DeckInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a CardInfo. */
export interface ICardInfo {

    /** CardInfo id */
    id?: (number|null);

    /** CardInfo name */
    name?: (string|null);

    /** CardInfo icon */
    icon?: (string|null);
}

/** Represents a CardInfo. */
export class CardInfo implements ICardInfo {

    /**
     * Constructs a new CardInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardInfo);

    /** CardInfo id. */
    public id: number;

    /** CardInfo name. */
    public name: string;

    /** CardInfo icon. */
    public icon: string;

    /**
     * Creates a new CardInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardInfo instance
     */
    public static create(properties?: ICardInfo): CardInfo;

    /**
     * Encodes the specified CardInfo message. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @param message CardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link CardInfo.verify|verify} messages.
     * @param message CardInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a CardInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): CardInfo;

    /**
     * Decodes a CardInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CardInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): CardInfo;

    /**
     * Verifies a CardInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a HandsInfo. */
export interface IHandsInfo {

    /** HandsInfo uid */
    uid?: (number|null);

    /** HandsInfo cardInfos */
    cardInfos?: (ICardInfo[]|null);

    /** HandsInfo mulliganCnt */
    mulliganCnt?: (number|null);

    /** HandsInfo mulliganExpireTime */
    mulliganExpireTime?: (number|Long|null);
}

/** Represents a HandsInfo. */
export class HandsInfo implements IHandsInfo {

    /**
     * Constructs a new HandsInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHandsInfo);

    /** HandsInfo uid. */
    public uid: number;

    /** HandsInfo cardInfos. */
    public cardInfos: ICardInfo[];

    /** HandsInfo mulliganCnt. */
    public mulliganCnt: number;

    /** HandsInfo mulliganExpireTime. */
    public mulliganExpireTime: (number|Long);

    /**
     * Creates a new HandsInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HandsInfo instance
     */
    public static create(properties?: IHandsInfo): HandsInfo;

    /**
     * Encodes the specified HandsInfo message. Does not implicitly {@link HandsInfo.verify|verify} messages.
     * @param message HandsInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link HandsInfo.verify|verify} messages.
     * @param message HandsInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a HandsInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HandsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): HandsInfo;

    /**
     * Decodes a HandsInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HandsInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): HandsInfo;

    /**
     * Verifies a HandsInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a GetCard. */
export interface IGetCard {

    /** GetCard userId */
    userId?: (number|null);

    /** GetCard newCard */
    newCard?: (ICardInfo[]|null);
}

/** Represents a GetCard. */
export class GetCard implements IGetCard {

    /**
     * Constructs a new GetCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetCard);

    /** GetCard userId. */
    public userId: number;

    /** GetCard newCard. */
    public newCard: ICardInfo[];

    /**
     * Creates a new GetCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetCard instance
     */
    public static create(properties?: IGetCard): GetCard;

    /**
     * Encodes the specified GetCard message. Does not implicitly {@link GetCard.verify|verify} messages.
     * @param message GetCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetCard, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified GetCard message, length delimited. Does not implicitly {@link GetCard.verify|verify} messages.
     * @param message GetCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetCard, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a GetCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): GetCard;

    /**
     * Decodes a GetCard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): GetCard;

    /**
     * Verifies a GetCard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a ClearBoomRequest. */
export interface IClearBoomRequest {

    /** ClearBoomRequest userId */
    userId?: (number|null);

    /** ClearBoomRequest roomNo */
    roomNo?: (string|null);

    /** ClearBoomRequest returnPos */
    returnPos?: (number|null);
}

/** Represents a ClearBoomRequest. */
export class ClearBoomRequest implements IClearBoomRequest {

    /**
     * Constructs a new ClearBoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClearBoomRequest);

    /** ClearBoomRequest userId. */
    public userId: number;

    /** ClearBoomRequest roomNo. */
    public roomNo: string;

    /** ClearBoomRequest returnPos. */
    public returnPos: number;

    /**
     * Creates a new ClearBoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ClearBoomRequest instance
     */
    public static create(properties?: IClearBoomRequest): ClearBoomRequest;

    /**
     * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoomRequest.verify|verify} messages.
     * @param message ClearBoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoomRequest.verify|verify} messages.
     * @param message ClearBoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ClearBoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ClearBoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ClearBoomRequest;

    /**
     * Decodes a ClearBoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ClearBoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ClearBoomRequest;

    /**
     * Verifies a ClearBoomRequest message.
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

    /** Message adjustCardReq */
    adjustCardReq?: (IAdjustCardRequest|null);

    /** Message adjustCardResp */
    adjustCardResp?: (IAdjustCardResponse|null);

    /** Message roomInfo */
    roomInfo?: (IRoomInfo|null);

    /** Message pickCardReq */
    pickCardReq?: (IPickCardRequest|null);

    /** Message getCardInfo */
    getCardInfo?: (IGetCard|null);

    /** Message clearBoomReq */
    clearBoomReq?: (IClearBoomRequest|null);

    /** Message releaseCardReq */
    releaseCardReq?: (IReleaseCardRequest|null);
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

    /** Message adjustCardReq. */
    public adjustCardReq?: (IAdjustCardRequest|null);

    /** Message adjustCardResp. */
    public adjustCardResp?: (IAdjustCardResponse|null);

    /** Message roomInfo. */
    public roomInfo?: (IRoomInfo|null);

    /** Message pickCardReq. */
    public pickCardReq?: (IPickCardRequest|null);

    /** Message getCardInfo. */
    public getCardInfo?: (IGetCard|null);

    /** Message clearBoomReq. */
    public clearBoomReq?: (IClearBoomRequest|null);

    /** Message releaseCardReq. */
    public releaseCardReq?: (IReleaseCardRequest|null);

    /** Message extension. */
    public extension?: ("joinRoomReq"|"joinRoomResp"|"adjustCardReq"|"adjustCardResp"|"roomInfo"|"pickCardReq"|"getCardInfo"|"clearBoomReq"|"releaseCardReq");

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

declare namespace Message {

    /** CommandType enum. */
    enum CommandType {
        NORMAL = 0,
        HEARTBEAT_REQUEST = 1,
        HEARTBEAT_RESPONSE = 2,
        JOIN_ROOM = 3,
        HANDS_UPDATE = 4,
        ADJUST_CARD = 5,
        ROOM_UPDATE = 6,
        PICK = 7,
        RELEASE = 8,
        CLEAR_BOOM = 9,
        TEST = 100
    }
}

/** Properties of a PickCardRequest. */
export interface IPickCardRequest {

    /** PickCardRequest userId */
    userId?: (number|null);

    /** PickCardRequest roomNo */
    roomNo?: (string|null);
}

/** Represents a PickCardRequest. */
export class PickCardRequest implements IPickCardRequest {

    /**
     * Constructs a new PickCardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPickCardRequest);

    /** PickCardRequest userId. */
    public userId: number;

    /** PickCardRequest roomNo. */
    public roomNo: string;

    /**
     * Creates a new PickCardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PickCardRequest instance
     */
    public static create(properties?: IPickCardRequest): PickCardRequest;

    /**
     * Encodes the specified PickCardRequest message. Does not implicitly {@link PickCardRequest.verify|verify} messages.
     * @param message PickCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPickCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified PickCardRequest message, length delimited. Does not implicitly {@link PickCardRequest.verify|verify} messages.
     * @param message PickCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPickCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a PickCardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PickCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PickCardRequest;

    /**
     * Decodes a PickCardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PickCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PickCardRequest;

    /**
     * Verifies a PickCardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}

/** Properties of a ReleaseCardRequest. */
export interface IReleaseCardRequest {

    /** ReleaseCardRequest userId */
    userId?: (number|null);

    /** ReleaseCardRequest roomNo */
    roomNo?: (string|null);

    /** ReleaseCardRequest cardId */
    cardId?: (number|null);

    /** ReleaseCardRequest targetId */
    targetId?: (number|null);
}

/** Represents a ReleaseCardRequest. */
export class ReleaseCardRequest implements IReleaseCardRequest {

    /**
     * Constructs a new ReleaseCardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReleaseCardRequest);

    /** ReleaseCardRequest userId. */
    public userId: number;

    /** ReleaseCardRequest roomNo. */
    public roomNo: string;

    /** ReleaseCardRequest cardId. */
    public cardId: number;

    /** ReleaseCardRequest targetId. */
    public targetId: number;

    /**
     * Creates a new ReleaseCardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReleaseCardRequest instance
     */
    public static create(properties?: IReleaseCardRequest): ReleaseCardRequest;

    /**
     * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCardRequest.verify|verify} messages.
     * @param message ReleaseCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCardRequest.verify|verify} messages.
     * @param message ReleaseCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

    /**
     * Decodes a ReleaseCardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReleaseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ReleaseCardRequest;

    /**
     * Decodes a ReleaseCardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReleaseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ReleaseCardRequest;

    /**
     * Verifies a ReleaseCardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);
}
