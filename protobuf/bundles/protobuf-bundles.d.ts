type Long = protobuf.Long;
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace AdjustCard. */
declare namespace AdjustCard {

    /** Properties of an AdjustCardRequest. */
    interface IAdjustCardRequest {

        /** AdjustCardRequest userId */
        userId?: (number|null);

        /** AdjustCardRequest roomNo */
        roomNo?: (string|null);
    }

    /** Represents an AdjustCardRequest. */
    class AdjustCardRequest implements IAdjustCardRequest {

        /**
         * Constructs a new AdjustCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: AdjustCard.IAdjustCardRequest);

        /** AdjustCardRequest userId. */
        public userId: number;

        /** AdjustCardRequest roomNo. */
        public roomNo: string;

        /**
         * Creates a new AdjustCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdjustCardRequest instance
         */
        public static create(properties?: AdjustCard.IAdjustCardRequest): AdjustCard.AdjustCardRequest;

        /**
         * Encodes the specified AdjustCardRequest message. Does not implicitly {@link AdjustCard.AdjustCardRequest.verify|verify} messages.
         * @param message AdjustCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AdjustCard.IAdjustCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AdjustCardRequest message, length delimited. Does not implicitly {@link AdjustCard.AdjustCardRequest.verify|verify} messages.
         * @param message AdjustCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AdjustCard.IAdjustCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdjustCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdjustCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): AdjustCard.AdjustCardRequest;

        /**
         * Decodes an AdjustCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdjustCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): AdjustCard.AdjustCardRequest;

        /**
         * Verifies an AdjustCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an AdjustCardResponse. */
    interface IAdjustCardResponse {

        /** AdjustCardResponse content */
        content?: (string|null);

        /** AdjustCardResponse handsInfo */
        handsInfo?: (Common.IHandsInfo|null);
    }

    /** Represents an AdjustCardResponse. */
    class AdjustCardResponse implements IAdjustCardResponse {

        /**
         * Constructs a new AdjustCardResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: AdjustCard.IAdjustCardResponse);

        /** AdjustCardResponse content. */
        public content: string;

        /** AdjustCardResponse handsInfo. */
        public handsInfo?: (Common.IHandsInfo|null);

        /**
         * Creates a new AdjustCardResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdjustCardResponse instance
         */
        public static create(properties?: AdjustCard.IAdjustCardResponse): AdjustCard.AdjustCardResponse;

        /**
         * Encodes the specified AdjustCardResponse message. Does not implicitly {@link AdjustCard.AdjustCardResponse.verify|verify} messages.
         * @param message AdjustCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AdjustCard.IAdjustCardResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified AdjustCardResponse message, length delimited. Does not implicitly {@link AdjustCard.AdjustCardResponse.verify|verify} messages.
         * @param message AdjustCardResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AdjustCard.IAdjustCardResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AdjustCardResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdjustCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): AdjustCard.AdjustCardResponse;

        /**
         * Decodes an AdjustCardResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdjustCardResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): AdjustCard.AdjustCardResponse;

        /**
         * Verifies an AdjustCardResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace Common. */
declare namespace Common {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

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
        handsInfo?: (Common.IHandsInfo|null);

        /** PlayerInfo countDownTime */
        countDownTime?: (number|null);

        /** PlayerInfo buff */
        buff?: (string|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IPlayerInfo);

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
        public handsInfo?: (Common.IHandsInfo|null);

        /** PlayerInfo countDownTime. */
        public countDownTime: number;

        /** PlayerInfo buff. */
        public buff: string;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: Common.IPlayerInfo): Common.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link Common.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IPlayerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo no */
        no?: (string|null);

        /** RoomInfo state */
        state?: (number|null);

        /** RoomInfo stackCount */
        stackCount?: (number|null);

        /** RoomInfo clockwise */
        clockwise?: (boolean|null);

        /** RoomInfo players */
        players?: (Common.IPlayerInfo[]|null);

        /** RoomInfo deckInfo */
        deckInfo?: (Common.IDeckInfo|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IRoomInfo);

        /** RoomInfo no. */
        public no: string;

        /** RoomInfo state. */
        public state: number;

        /** RoomInfo stackCount. */
        public stackCount: number;

        /** RoomInfo clockwise. */
        public clockwise: boolean;

        /** RoomInfo players. */
        public players: Common.IPlayerInfo[];

        /** RoomInfo deckInfo. */
        public deckInfo?: (Common.IDeckInfo|null);

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: Common.IRoomInfo): Common.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link Common.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IRoomInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a DeckInfo. */
    interface IDeckInfo {

        /** DeckInfo leftCount */
        leftCount?: (number|null);

        /** DeckInfo hit */
        hit?: (number|null);

        /** DeckInfo buff */
        buff?: (string|null);
    }

    /** Represents a DeckInfo. */
    class DeckInfo implements IDeckInfo {

        /**
         * Constructs a new DeckInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IDeckInfo);

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
        public static create(properties?: Common.IDeckInfo): Common.DeckInfo;

        /**
         * Encodes the specified DeckInfo message. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @param message DeckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified DeckInfo message, length delimited. Does not implicitly {@link Common.DeckInfo.verify|verify} messages.
         * @param message DeckInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IDeckInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DeckInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.DeckInfo;

        /**
         * Decodes a DeckInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeckInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.DeckInfo;

        /**
         * Verifies a DeckInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo id */
        id?: (number|null);

        /** CardInfo name */
        name?: (string|null);

        /** CardInfo icon */
        icon?: (string|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.ICardInfo);

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
        public static create(properties?: Common.ICardInfo): Common.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link Common.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link Common.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.ICardInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a HandsInfo. */
    interface IHandsInfo {

        /** HandsInfo uid */
        uid?: (number|null);

        /** HandsInfo cardInfos */
        cardInfos?: (Common.ICardInfo[]|null);

        /** HandsInfo mulliganCnt */
        mulliganCnt?: (number|null);

        /** HandsInfo mulliganExpireTime */
        mulliganExpireTime?: (number|Long|null);
    }

    /** Represents a HandsInfo. */
    class HandsInfo implements IHandsInfo {

        /**
         * Constructs a new HandsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IHandsInfo);

        /** HandsInfo uid. */
        public uid: number;

        /** HandsInfo cardInfos. */
        public cardInfos: Common.ICardInfo[];

        /** HandsInfo mulliganCnt. */
        public mulliganCnt: number;

        /** HandsInfo mulliganExpireTime. */
        public mulliganExpireTime: (number|Long);

        /**
         * Creates a new HandsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HandsInfo instance
         */
        public static create(properties?: Common.IHandsInfo): Common.HandsInfo;

        /**
         * Encodes the specified HandsInfo message. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @param message HandsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified HandsInfo message, length delimited. Does not implicitly {@link Common.HandsInfo.verify|verify} messages.
         * @param message HandsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IHandsInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a HandsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.HandsInfo;

        /**
         * Decodes a HandsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HandsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.HandsInfo;

        /**
         * Verifies a HandsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetCard. */
    interface IGetCard {

        /** GetCard userId */
        userId?: (number|null);

        /** GetCard newCard */
        newCard?: (Common.ICardInfo[]|null);
    }

    /** Represents a GetCard. */
    class GetCard implements IGetCard {

        /**
         * Constructs a new GetCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: Common.IGetCard);

        /** GetCard userId. */
        public userId: number;

        /** GetCard newCard. */
        public newCard: Common.ICardInfo[];

        /**
         * Creates a new GetCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetCard instance
         */
        public static create(properties?: Common.IGetCard): Common.GetCard;

        /**
         * Encodes the specified GetCard message. Does not implicitly {@link Common.GetCard.verify|verify} messages.
         * @param message GetCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Common.IGetCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetCard message, length delimited. Does not implicitly {@link Common.GetCard.verify|verify} messages.
         * @param message GetCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Common.IGetCard, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Common.GetCard;

        /**
         * Decodes a GetCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Common.GetCard;

        /**
         * Verifies a GetCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace ClearBoom. */
declare namespace ClearBoom {

    /** Properties of a ClearBoomRequest. */
    interface IClearBoomRequest {

        /** ClearBoomRequest userId */
        userId?: (number|null);

        /** ClearBoomRequest roomNo */
        roomNo?: (string|null);

        /** ClearBoomRequest returnPos */
        returnPos?: (number|null);
    }

    /** Represents a ClearBoomRequest. */
    class ClearBoomRequest implements IClearBoomRequest {

        /**
         * Constructs a new ClearBoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ClearBoom.IClearBoomRequest);

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
        public static create(properties?: ClearBoom.IClearBoomRequest): ClearBoom.ClearBoomRequest;

        /**
         * Encodes the specified ClearBoomRequest message. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @param message ClearBoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ClearBoom.IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ClearBoomRequest message, length delimited. Does not implicitly {@link ClearBoom.ClearBoomRequest.verify|verify} messages.
         * @param message ClearBoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ClearBoom.IClearBoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ClearBoom.ClearBoomRequest;

        /**
         * Decodes a ClearBoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearBoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ClearBoom.ClearBoomRequest;

        /**
         * Verifies a ClearBoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace JoinRoom. */
declare namespace JoinRoom {

    /** Properties of a JoinRoomRequest. */
    interface IJoinRoomRequest {

        /** JoinRoomRequest cookie */
        cookie?: (string|null);

        /** JoinRoomRequest wdh */
        wdh?: (number|null);

        /** JoinRoomRequest players */
        players?: (Common.IPlayerInfo[]|null);

        /** JoinRoomRequest gameId */
        gameId?: (number|null);

        /** JoinRoomRequest roomNo */
        roomNo?: (string|null);

        /** JoinRoomRequest uid */
        uid?: (number|null);
    }

    /** Represents a JoinRoomRequest. */
    class JoinRoomRequest implements IJoinRoomRequest {

        /**
         * Constructs a new JoinRoomRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: JoinRoom.IJoinRoomRequest);

        /** JoinRoomRequest cookie. */
        public cookie: string;

        /** JoinRoomRequest wdh. */
        public wdh: number;

        /** JoinRoomRequest players. */
        public players: Common.IPlayerInfo[];

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
        public static create(properties?: JoinRoom.IJoinRoomRequest): JoinRoom.JoinRoomRequest;

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: JoinRoom.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomRequest.verify|verify} messages.
         * @param message JoinRoomRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: JoinRoom.IJoinRoomRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): JoinRoom.JoinRoomRequest;

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): JoinRoom.JoinRoomRequest;

        /**
         * Verifies a JoinRoomRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a JoinRoomResponse. */
    interface IJoinRoomResponse {

        /** JoinRoomResponse content */
        content?: (string|null);

        /** JoinRoomResponse roomInfo */
        roomInfo?: (Common.IRoomInfo|null);
    }

    /** Represents a JoinRoomResponse. */
    class JoinRoomResponse implements IJoinRoomResponse {

        /**
         * Constructs a new JoinRoomResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: JoinRoom.IJoinRoomResponse);

        /** JoinRoomResponse content. */
        public content: string;

        /** JoinRoomResponse roomInfo. */
        public roomInfo?: (Common.IRoomInfo|null);

        /**
         * Creates a new JoinRoomResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinRoomResponse instance
         */
        public static create(properties?: JoinRoom.IJoinRoomResponse): JoinRoom.JoinRoomResponse;

        /**
         * Encodes the specified JoinRoomResponse message. Does not implicitly {@link JoinRoom.JoinRoomResponse.verify|verify} messages.
         * @param message JoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: JoinRoom.IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified JoinRoomResponse message, length delimited. Does not implicitly {@link JoinRoom.JoinRoomResponse.verify|verify} messages.
         * @param message JoinRoomResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: JoinRoom.IJoinRoomResponse, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): JoinRoom.JoinRoomResponse;

        /**
         * Decodes a JoinRoomResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinRoomResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): JoinRoom.JoinRoomResponse;

        /**
         * Verifies a JoinRoomResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace Msg. */
declare namespace Msg {

    /** Properties of a Message. */
    interface IMessage {

        /** Message requestId */
        requestId?: (string|null);

        /** Message cmd */
        cmd?: (Msg.Message.CommandType|null);

        /** Message content */
        content?: (string|null);

        /** Message joinRoomReq */
        joinRoomReq?: (JoinRoom.IJoinRoomRequest|null);

        /** Message joinRoomResp */
        joinRoomResp?: (JoinRoom.IJoinRoomResponse|null);

        /** Message adjustCardReq */
        adjustCardReq?: (AdjustCard.IAdjustCardRequest|null);

        /** Message adjustCardResp */
        adjustCardResp?: (AdjustCard.IAdjustCardResponse|null);

        /** Message roomInfo */
        roomInfo?: (Common.IRoomInfo|null);

        /** Message pickCardReq */
        pickCardReq?: (PickCard.IPickCardRequest|null);

        /** Message getCardInfo */
        getCardInfo?: (Common.IGetCard|null);

        /** Message clearBoomReq */
        clearBoomReq?: (ClearBoom.IClearBoomRequest|null);

        /** Message releaseCardReq */
        releaseCardReq?: (ReleaseCard.IReleaseCardRequest|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: Msg.IMessage);

        /** Message requestId. */
        public requestId: string;

        /** Message cmd. */
        public cmd: Msg.Message.CommandType;

        /** Message content. */
        public content: string;

        /** Message joinRoomReq. */
        public joinRoomReq?: (JoinRoom.IJoinRoomRequest|null);

        /** Message joinRoomResp. */
        public joinRoomResp?: (JoinRoom.IJoinRoomResponse|null);

        /** Message adjustCardReq. */
        public adjustCardReq?: (AdjustCard.IAdjustCardRequest|null);

        /** Message adjustCardResp. */
        public adjustCardResp?: (AdjustCard.IAdjustCardResponse|null);

        /** Message roomInfo. */
        public roomInfo?: (Common.IRoomInfo|null);

        /** Message pickCardReq. */
        public pickCardReq?: (PickCard.IPickCardRequest|null);

        /** Message getCardInfo. */
        public getCardInfo?: (Common.IGetCard|null);

        /** Message clearBoomReq. */
        public clearBoomReq?: (ClearBoom.IClearBoomRequest|null);

        /** Message releaseCardReq. */
        public releaseCardReq?: (ReleaseCard.IReleaseCardRequest|null);

        /** Message extension. */
        public extension?: ("joinRoomReq"|"joinRoomResp"|"adjustCardReq"|"adjustCardResp"|"roomInfo"|"pickCardReq"|"getCardInfo"|"clearBoomReq"|"releaseCardReq");

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: Msg.IMessage): Msg.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Msg.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link Msg.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Msg.IMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Msg.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Msg.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    namespace Message {

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
}

/** Namespace PickCard. */
declare namespace PickCard {

    /** Properties of a PickCardRequest. */
    interface IPickCardRequest {

        /** PickCardRequest userId */
        userId?: (number|null);

        /** PickCardRequest roomNo */
        roomNo?: (string|null);
    }

    /** Represents a PickCardRequest. */
    class PickCardRequest implements IPickCardRequest {

        /**
         * Constructs a new PickCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: PickCard.IPickCardRequest);

        /** PickCardRequest userId. */
        public userId: number;

        /** PickCardRequest roomNo. */
        public roomNo: string;

        /**
         * Creates a new PickCardRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PickCardRequest instance
         */
        public static create(properties?: PickCard.IPickCardRequest): PickCard.PickCardRequest;

        /**
         * Encodes the specified PickCardRequest message. Does not implicitly {@link PickCard.PickCardRequest.verify|verify} messages.
         * @param message PickCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PickCard.IPickCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PickCardRequest message, length delimited. Does not implicitly {@link PickCard.PickCardRequest.verify|verify} messages.
         * @param message PickCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PickCard.IPickCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PickCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PickCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): PickCard.PickCardRequest;

        /**
         * Decodes a PickCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PickCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): PickCard.PickCardRequest;

        /**
         * Verifies a PickCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace ReleaseCard. */
declare namespace ReleaseCard {

    /** Properties of a ReleaseCardRequest. */
    interface IReleaseCardRequest {

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
    class ReleaseCardRequest implements IReleaseCardRequest {

        /**
         * Constructs a new ReleaseCardRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ReleaseCard.IReleaseCardRequest);

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
        public static create(properties?: ReleaseCard.IReleaseCardRequest): ReleaseCard.ReleaseCardRequest;

        /**
         * Encodes the specified ReleaseCardRequest message. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @param message ReleaseCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ReleaseCard.IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ReleaseCardRequest message, length delimited. Does not implicitly {@link ReleaseCard.ReleaseCardRequest.verify|verify} messages.
         * @param message ReleaseCardRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ReleaseCard.IReleaseCardRequest, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): ReleaseCard.ReleaseCardRequest;

        /**
         * Decodes a ReleaseCardRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReleaseCardRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): ReleaseCard.ReleaseCardRequest;

        /**
         * Verifies a ReleaseCardRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
