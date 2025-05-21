
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Widget
 * 
 */
export type Widget = $Result.DefaultSelection<Prisma.$WidgetPayload>
/**
 * Model WidgetTemplates
 * 
 */
export type WidgetTemplates = $Result.DefaultSelection<Prisma.$WidgetTemplatesPayload>
/**
 * Model Dashboard
 * 
 */
export type Dashboard = $Result.DefaultSelection<Prisma.$DashboardPayload>
/**
 * Model DashboardWidget
 * 
 */
export type DashboardWidget = $Result.DefaultSelection<Prisma.$DashboardWidgetPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.widget`: Exposes CRUD operations for the **Widget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Widgets
    * const widgets = await prisma.widget.findMany()
    * ```
    */
  get widget(): Prisma.WidgetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.widgetTemplates`: Exposes CRUD operations for the **WidgetTemplates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WidgetTemplates
    * const widgetTemplates = await prisma.widgetTemplates.findMany()
    * ```
    */
  get widgetTemplates(): Prisma.WidgetTemplatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboard`: Exposes CRUD operations for the **Dashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dashboards
    * const dashboards = await prisma.dashboard.findMany()
    * ```
    */
  get dashboard(): Prisma.DashboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardWidget`: Exposes CRUD operations for the **DashboardWidget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardWidgets
    * const dashboardWidgets = await prisma.dashboardWidget.findMany()
    * ```
    */
  get dashboardWidget(): Prisma.DashboardWidgetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Widget: 'Widget',
    WidgetTemplates: 'WidgetTemplates',
    Dashboard: 'Dashboard',
    DashboardWidget: 'DashboardWidget'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "widget" | "widgetTemplates" | "dashboard" | "dashboardWidget"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Widget: {
        payload: Prisma.$WidgetPayload<ExtArgs>
        fields: Prisma.WidgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WidgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WidgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          findFirst: {
            args: Prisma.WidgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WidgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          findMany: {
            args: Prisma.WidgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>[]
          }
          create: {
            args: Prisma.WidgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          createMany: {
            args: Prisma.WidgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WidgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>[]
          }
          delete: {
            args: Prisma.WidgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          update: {
            args: Prisma.WidgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          deleteMany: {
            args: Prisma.WidgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WidgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WidgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>[]
          }
          upsert: {
            args: Prisma.WidgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetPayload>
          }
          aggregate: {
            args: Prisma.WidgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWidget>
          }
          groupBy: {
            args: Prisma.WidgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<WidgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.WidgetCountArgs<ExtArgs>
            result: $Utils.Optional<WidgetCountAggregateOutputType> | number
          }
        }
      }
      WidgetTemplates: {
        payload: Prisma.$WidgetTemplatesPayload<ExtArgs>
        fields: Prisma.WidgetTemplatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WidgetTemplatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WidgetTemplatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          findFirst: {
            args: Prisma.WidgetTemplatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WidgetTemplatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          findMany: {
            args: Prisma.WidgetTemplatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>[]
          }
          create: {
            args: Prisma.WidgetTemplatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          createMany: {
            args: Prisma.WidgetTemplatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WidgetTemplatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>[]
          }
          delete: {
            args: Prisma.WidgetTemplatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          update: {
            args: Prisma.WidgetTemplatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          deleteMany: {
            args: Prisma.WidgetTemplatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WidgetTemplatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WidgetTemplatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>[]
          }
          upsert: {
            args: Prisma.WidgetTemplatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WidgetTemplatesPayload>
          }
          aggregate: {
            args: Prisma.WidgetTemplatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWidgetTemplates>
          }
          groupBy: {
            args: Prisma.WidgetTemplatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WidgetTemplatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WidgetTemplatesCountArgs<ExtArgs>
            result: $Utils.Optional<WidgetTemplatesCountAggregateOutputType> | number
          }
        }
      }
      Dashboard: {
        payload: Prisma.$DashboardPayload<ExtArgs>
        fields: Prisma.DashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findFirst: {
            args: Prisma.DashboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findMany: {
            args: Prisma.DashboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          create: {
            args: Prisma.DashboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          createMany: {
            args: Prisma.DashboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          delete: {
            args: Prisma.DashboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          update: {
            args: Prisma.DashboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          deleteMany: {
            args: Prisma.DashboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          upsert: {
            args: Prisma.DashboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          aggregate: {
            args: Prisma.DashboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboard>
          }
          groupBy: {
            args: Prisma.DashboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardCountAggregateOutputType> | number
          }
        }
      }
      DashboardWidget: {
        payload: Prisma.$DashboardWidgetPayload<ExtArgs>
        fields: Prisma.DashboardWidgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardWidgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardWidgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          findFirst: {
            args: Prisma.DashboardWidgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardWidgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          findMany: {
            args: Prisma.DashboardWidgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>[]
          }
          create: {
            args: Prisma.DashboardWidgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          createMany: {
            args: Prisma.DashboardWidgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardWidgetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>[]
          }
          delete: {
            args: Prisma.DashboardWidgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          update: {
            args: Prisma.DashboardWidgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          deleteMany: {
            args: Prisma.DashboardWidgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardWidgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardWidgetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>[]
          }
          upsert: {
            args: Prisma.DashboardWidgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardWidgetPayload>
          }
          aggregate: {
            args: Prisma.DashboardWidgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardWidget>
          }
          groupBy: {
            args: Prisma.DashboardWidgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardWidgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardWidgetCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardWidgetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    widget?: WidgetOmit
    widgetTemplates?: WidgetTemplatesOmit
    dashboard?: DashboardOmit
    dashboardWidget?: DashboardWidgetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dashboards: number
    widgets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboards?: boolean | UserCountOutputTypeCountDashboardsArgs
    widgets?: boolean | UserCountOutputTypeCountWidgetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetWhereInput
  }


  /**
   * Count Type WidgetCountOutputType
   */

  export type WidgetCountOutputType = {
    dashboardWidgets: number
  }

  export type WidgetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboardWidgets?: boolean | WidgetCountOutputTypeCountDashboardWidgetsArgs
  }

  // Custom InputTypes
  /**
   * WidgetCountOutputType without action
   */
  export type WidgetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetCountOutputType
     */
    select?: WidgetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WidgetCountOutputType without action
   */
  export type WidgetCountOutputTypeCountDashboardWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWidgetWhereInput
  }


  /**
   * Count Type WidgetTemplatesCountOutputType
   */

  export type WidgetTemplatesCountOutputType = {
    widgets: number
  }

  export type WidgetTemplatesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgets?: boolean | WidgetTemplatesCountOutputTypeCountWidgetsArgs
  }

  // Custom InputTypes
  /**
   * WidgetTemplatesCountOutputType without action
   */
  export type WidgetTemplatesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplatesCountOutputType
     */
    select?: WidgetTemplatesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WidgetTemplatesCountOutputType without action
   */
  export type WidgetTemplatesCountOutputTypeCountWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetWhereInput
  }


  /**
   * Count Type DashboardCountOutputType
   */

  export type DashboardCountOutputType = {
    dashboardWidgets: number
  }

  export type DashboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboardWidgets?: boolean | DashboardCountOutputTypeCountDashboardWidgetsArgs
  }

  // Custom InputTypes
  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardCountOutputType
     */
    select?: DashboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeCountDashboardWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWidgetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createAt: Date
    updateAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    widgets?: boolean | User$widgetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createAt" | "updateAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    widgets?: boolean | User$widgetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dashboards: Prisma.$DashboardPayload<ExtArgs>[]
      widgets: Prisma.$WidgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboards<T extends User$dashboardsArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    widgets<T extends User$widgetsArgs<ExtArgs> = {}>(args?: Subset<T, User$widgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.dashboards
   */
  export type User$dashboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    cursor?: DashboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * User.widgets
   */
  export type User$widgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    where?: WidgetWhereInput
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    cursor?: WidgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WidgetScalarFieldEnum | WidgetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Widget
   */

  export type AggregateWidget = {
    _count: WidgetCountAggregateOutputType | null
    _min: WidgetMinAggregateOutputType | null
    _max: WidgetMaxAggregateOutputType | null
  }

  export type WidgetMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    config: string | null
    layout: string | null
    templateId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type WidgetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    config: string | null
    layout: string | null
    templateId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type WidgetCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    config: number
    layout: number
    templateId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type WidgetMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    config?: true
    layout?: true
    templateId?: true
    createAt?: true
    updateAt?: true
  }

  export type WidgetMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    config?: true
    layout?: true
    templateId?: true
    createAt?: true
    updateAt?: true
  }

  export type WidgetCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    config?: true
    layout?: true
    templateId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type WidgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Widget to aggregate.
     */
    where?: WidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets to fetch.
     */
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Widgets
    **/
    _count?: true | WidgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WidgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WidgetMaxAggregateInputType
  }

  export type GetWidgetAggregateType<T extends WidgetAggregateArgs> = {
        [P in keyof T & keyof AggregateWidget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidget[P]>
      : GetScalarType<T[P], AggregateWidget[P]>
  }




  export type WidgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetWhereInput
    orderBy?: WidgetOrderByWithAggregationInput | WidgetOrderByWithAggregationInput[]
    by: WidgetScalarFieldEnum[] | WidgetScalarFieldEnum
    having?: WidgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WidgetCountAggregateInputType | true
    _min?: WidgetMinAggregateInputType
    _max?: WidgetMaxAggregateInputType
  }

  export type WidgetGroupByOutputType = {
    id: string
    name: string
    userId: string
    config: string
    layout: string
    templateId: string | null
    createAt: Date
    updateAt: Date
    _count: WidgetCountAggregateOutputType | null
    _min: WidgetMinAggregateOutputType | null
    _max: WidgetMaxAggregateOutputType | null
  }

  type GetWidgetGroupByPayload<T extends WidgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WidgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WidgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WidgetGroupByOutputType[P]>
            : GetScalarType<T[P], WidgetGroupByOutputType[P]>
        }
      >
    >


  export type WidgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    config?: boolean
    layout?: boolean
    templateId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dashboardWidgets?: boolean | Widget$dashboardWidgetsArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
    _count?: boolean | WidgetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widget"]>

  export type WidgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    config?: boolean
    layout?: boolean
    templateId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
  }, ExtArgs["result"]["widget"]>

  export type WidgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    config?: boolean
    layout?: boolean
    templateId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
  }, ExtArgs["result"]["widget"]>

  export type WidgetSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    config?: boolean
    layout?: boolean
    templateId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type WidgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "config" | "layout" | "templateId" | "createAt" | "updateAt", ExtArgs["result"]["widget"]>
  export type WidgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dashboardWidgets?: boolean | Widget$dashboardWidgetsArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
    _count?: boolean | WidgetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WidgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
  }
  export type WidgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    widgetTemplate?: boolean | Widget$widgetTemplateArgs<ExtArgs>
  }

  export type $WidgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Widget"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dashboardWidgets: Prisma.$DashboardWidgetPayload<ExtArgs>[]
      widgetTemplate: Prisma.$WidgetTemplatesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      config: string
      layout: string
      templateId: string | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["widget"]>
    composites: {}
  }

  type WidgetGetPayload<S extends boolean | null | undefined | WidgetDefaultArgs> = $Result.GetResult<Prisma.$WidgetPayload, S>

  type WidgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WidgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WidgetCountAggregateInputType | true
    }

  export interface WidgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Widget'], meta: { name: 'Widget' } }
    /**
     * Find zero or one Widget that matches the filter.
     * @param {WidgetFindUniqueArgs} args - Arguments to find a Widget
     * @example
     * // Get one Widget
     * const widget = await prisma.widget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WidgetFindUniqueArgs>(args: SelectSubset<T, WidgetFindUniqueArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Widget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WidgetFindUniqueOrThrowArgs} args - Arguments to find a Widget
     * @example
     * // Get one Widget
     * const widget = await prisma.widget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WidgetFindUniqueOrThrowArgs>(args: SelectSubset<T, WidgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Widget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetFindFirstArgs} args - Arguments to find a Widget
     * @example
     * // Get one Widget
     * const widget = await prisma.widget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WidgetFindFirstArgs>(args?: SelectSubset<T, WidgetFindFirstArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Widget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetFindFirstOrThrowArgs} args - Arguments to find a Widget
     * @example
     * // Get one Widget
     * const widget = await prisma.widget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WidgetFindFirstOrThrowArgs>(args?: SelectSubset<T, WidgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Widgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Widgets
     * const widgets = await prisma.widget.findMany()
     * 
     * // Get first 10 Widgets
     * const widgets = await prisma.widget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const widgetWithIdOnly = await prisma.widget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WidgetFindManyArgs>(args?: SelectSubset<T, WidgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Widget.
     * @param {WidgetCreateArgs} args - Arguments to create a Widget.
     * @example
     * // Create one Widget
     * const Widget = await prisma.widget.create({
     *   data: {
     *     // ... data to create a Widget
     *   }
     * })
     * 
     */
    create<T extends WidgetCreateArgs>(args: SelectSubset<T, WidgetCreateArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Widgets.
     * @param {WidgetCreateManyArgs} args - Arguments to create many Widgets.
     * @example
     * // Create many Widgets
     * const widget = await prisma.widget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WidgetCreateManyArgs>(args?: SelectSubset<T, WidgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Widgets and returns the data saved in the database.
     * @param {WidgetCreateManyAndReturnArgs} args - Arguments to create many Widgets.
     * @example
     * // Create many Widgets
     * const widget = await prisma.widget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Widgets and only return the `id`
     * const widgetWithIdOnly = await prisma.widget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WidgetCreateManyAndReturnArgs>(args?: SelectSubset<T, WidgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Widget.
     * @param {WidgetDeleteArgs} args - Arguments to delete one Widget.
     * @example
     * // Delete one Widget
     * const Widget = await prisma.widget.delete({
     *   where: {
     *     // ... filter to delete one Widget
     *   }
     * })
     * 
     */
    delete<T extends WidgetDeleteArgs>(args: SelectSubset<T, WidgetDeleteArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Widget.
     * @param {WidgetUpdateArgs} args - Arguments to update one Widget.
     * @example
     * // Update one Widget
     * const widget = await prisma.widget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WidgetUpdateArgs>(args: SelectSubset<T, WidgetUpdateArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Widgets.
     * @param {WidgetDeleteManyArgs} args - Arguments to filter Widgets to delete.
     * @example
     * // Delete a few Widgets
     * const { count } = await prisma.widget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WidgetDeleteManyArgs>(args?: SelectSubset<T, WidgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Widgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Widgets
     * const widget = await prisma.widget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WidgetUpdateManyArgs>(args: SelectSubset<T, WidgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Widgets and returns the data updated in the database.
     * @param {WidgetUpdateManyAndReturnArgs} args - Arguments to update many Widgets.
     * @example
     * // Update many Widgets
     * const widget = await prisma.widget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Widgets and only return the `id`
     * const widgetWithIdOnly = await prisma.widget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WidgetUpdateManyAndReturnArgs>(args: SelectSubset<T, WidgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Widget.
     * @param {WidgetUpsertArgs} args - Arguments to update or create a Widget.
     * @example
     * // Update or create a Widget
     * const widget = await prisma.widget.upsert({
     *   create: {
     *     // ... data to create a Widget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Widget we want to update
     *   }
     * })
     */
    upsert<T extends WidgetUpsertArgs>(args: SelectSubset<T, WidgetUpsertArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Widgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetCountArgs} args - Arguments to filter Widgets to count.
     * @example
     * // Count the number of Widgets
     * const count = await prisma.widget.count({
     *   where: {
     *     // ... the filter for the Widgets we want to count
     *   }
     * })
    **/
    count<T extends WidgetCountArgs>(
      args?: Subset<T, WidgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WidgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Widget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WidgetAggregateArgs>(args: Subset<T, WidgetAggregateArgs>): Prisma.PrismaPromise<GetWidgetAggregateType<T>>

    /**
     * Group by Widget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WidgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WidgetGroupByArgs['orderBy'] }
        : { orderBy?: WidgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WidgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Widget model
   */
  readonly fields: WidgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Widget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WidgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dashboardWidgets<T extends Widget$dashboardWidgetsArgs<ExtArgs> = {}>(args?: Subset<T, Widget$dashboardWidgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    widgetTemplate<T extends Widget$widgetTemplateArgs<ExtArgs> = {}>(args?: Subset<T, Widget$widgetTemplateArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Widget model
   */
  interface WidgetFieldRefs {
    readonly id: FieldRef<"Widget", 'String'>
    readonly name: FieldRef<"Widget", 'String'>
    readonly userId: FieldRef<"Widget", 'String'>
    readonly config: FieldRef<"Widget", 'String'>
    readonly layout: FieldRef<"Widget", 'String'>
    readonly templateId: FieldRef<"Widget", 'String'>
    readonly createAt: FieldRef<"Widget", 'DateTime'>
    readonly updateAt: FieldRef<"Widget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Widget findUnique
   */
  export type WidgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter, which Widget to fetch.
     */
    where: WidgetWhereUniqueInput
  }

  /**
   * Widget findUniqueOrThrow
   */
  export type WidgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter, which Widget to fetch.
     */
    where: WidgetWhereUniqueInput
  }

  /**
   * Widget findFirst
   */
  export type WidgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter, which Widget to fetch.
     */
    where?: WidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets to fetch.
     */
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widgets.
     */
    cursor?: WidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widgets.
     */
    distinct?: WidgetScalarFieldEnum | WidgetScalarFieldEnum[]
  }

  /**
   * Widget findFirstOrThrow
   */
  export type WidgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter, which Widget to fetch.
     */
    where?: WidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets to fetch.
     */
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Widgets.
     */
    cursor?: WidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Widgets.
     */
    distinct?: WidgetScalarFieldEnum | WidgetScalarFieldEnum[]
  }

  /**
   * Widget findMany
   */
  export type WidgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter, which Widgets to fetch.
     */
    where?: WidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Widgets to fetch.
     */
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Widgets.
     */
    cursor?: WidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Widgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Widgets.
     */
    skip?: number
    distinct?: WidgetScalarFieldEnum | WidgetScalarFieldEnum[]
  }

  /**
   * Widget create
   */
  export type WidgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * The data needed to create a Widget.
     */
    data: XOR<WidgetCreateInput, WidgetUncheckedCreateInput>
  }

  /**
   * Widget createMany
   */
  export type WidgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Widgets.
     */
    data: WidgetCreateManyInput | WidgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Widget createManyAndReturn
   */
  export type WidgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * The data used to create many Widgets.
     */
    data: WidgetCreateManyInput | WidgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Widget update
   */
  export type WidgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * The data needed to update a Widget.
     */
    data: XOR<WidgetUpdateInput, WidgetUncheckedUpdateInput>
    /**
     * Choose, which Widget to update.
     */
    where: WidgetWhereUniqueInput
  }

  /**
   * Widget updateMany
   */
  export type WidgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Widgets.
     */
    data: XOR<WidgetUpdateManyMutationInput, WidgetUncheckedUpdateManyInput>
    /**
     * Filter which Widgets to update
     */
    where?: WidgetWhereInput
    /**
     * Limit how many Widgets to update.
     */
    limit?: number
  }

  /**
   * Widget updateManyAndReturn
   */
  export type WidgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * The data used to update Widgets.
     */
    data: XOR<WidgetUpdateManyMutationInput, WidgetUncheckedUpdateManyInput>
    /**
     * Filter which Widgets to update
     */
    where?: WidgetWhereInput
    /**
     * Limit how many Widgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Widget upsert
   */
  export type WidgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * The filter to search for the Widget to update in case it exists.
     */
    where: WidgetWhereUniqueInput
    /**
     * In case the Widget found by the `where` argument doesn't exist, create a new Widget with this data.
     */
    create: XOR<WidgetCreateInput, WidgetUncheckedCreateInput>
    /**
     * In case the Widget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WidgetUpdateInput, WidgetUncheckedUpdateInput>
  }

  /**
   * Widget delete
   */
  export type WidgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    /**
     * Filter which Widget to delete.
     */
    where: WidgetWhereUniqueInput
  }

  /**
   * Widget deleteMany
   */
  export type WidgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Widgets to delete
     */
    where?: WidgetWhereInput
    /**
     * Limit how many Widgets to delete.
     */
    limit?: number
  }

  /**
   * Widget.dashboardWidgets
   */
  export type Widget$dashboardWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    where?: DashboardWidgetWhereInput
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    cursor?: DashboardWidgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardWidgetScalarFieldEnum | DashboardWidgetScalarFieldEnum[]
  }

  /**
   * Widget.widgetTemplate
   */
  export type Widget$widgetTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    where?: WidgetTemplatesWhereInput
  }

  /**
   * Widget without action
   */
  export type WidgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
  }


  /**
   * Model WidgetTemplates
   */

  export type AggregateWidgetTemplates = {
    _count: WidgetTemplatesCountAggregateOutputType | null
    _min: WidgetTemplatesMinAggregateOutputType | null
    _max: WidgetTemplatesMaxAggregateOutputType | null
  }

  export type WidgetTemplatesMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    defaultConfig: string | null
    defaultLayout: string | null
    createAt: Date | null
  }

  export type WidgetTemplatesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    defaultConfig: string | null
    defaultLayout: string | null
    createAt: Date | null
  }

  export type WidgetTemplatesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    types: number
    defaultConfig: number
    defaultLayout: number
    createAt: number
    _all: number
  }


  export type WidgetTemplatesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    defaultConfig?: true
    defaultLayout?: true
    createAt?: true
  }

  export type WidgetTemplatesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    defaultConfig?: true
    defaultLayout?: true
    createAt?: true
  }

  export type WidgetTemplatesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    types?: true
    defaultConfig?: true
    defaultLayout?: true
    createAt?: true
    _all?: true
  }

  export type WidgetTemplatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetTemplates to aggregate.
     */
    where?: WidgetTemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetTemplates to fetch.
     */
    orderBy?: WidgetTemplatesOrderByWithRelationInput | WidgetTemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WidgetTemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WidgetTemplates
    **/
    _count?: true | WidgetTemplatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WidgetTemplatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WidgetTemplatesMaxAggregateInputType
  }

  export type GetWidgetTemplatesAggregateType<T extends WidgetTemplatesAggregateArgs> = {
        [P in keyof T & keyof AggregateWidgetTemplates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWidgetTemplates[P]>
      : GetScalarType<T[P], AggregateWidgetTemplates[P]>
  }




  export type WidgetTemplatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WidgetTemplatesWhereInput
    orderBy?: WidgetTemplatesOrderByWithAggregationInput | WidgetTemplatesOrderByWithAggregationInput[]
    by: WidgetTemplatesScalarFieldEnum[] | WidgetTemplatesScalarFieldEnum
    having?: WidgetTemplatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WidgetTemplatesCountAggregateInputType | true
    _min?: WidgetTemplatesMinAggregateInputType
    _max?: WidgetTemplatesMaxAggregateInputType
  }

  export type WidgetTemplatesGroupByOutputType = {
    id: string
    title: string
    description: string
    types: string[]
    defaultConfig: string
    defaultLayout: string
    createAt: Date
    _count: WidgetTemplatesCountAggregateOutputType | null
    _min: WidgetTemplatesMinAggregateOutputType | null
    _max: WidgetTemplatesMaxAggregateOutputType | null
  }

  type GetWidgetTemplatesGroupByPayload<T extends WidgetTemplatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WidgetTemplatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WidgetTemplatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WidgetTemplatesGroupByOutputType[P]>
            : GetScalarType<T[P], WidgetTemplatesGroupByOutputType[P]>
        }
      >
    >


  export type WidgetTemplatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    types?: boolean
    defaultConfig?: boolean
    defaultLayout?: boolean
    createAt?: boolean
    widgets?: boolean | WidgetTemplates$widgetsArgs<ExtArgs>
    _count?: boolean | WidgetTemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["widgetTemplates"]>

  export type WidgetTemplatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    types?: boolean
    defaultConfig?: boolean
    defaultLayout?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["widgetTemplates"]>

  export type WidgetTemplatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    types?: boolean
    defaultConfig?: boolean
    defaultLayout?: boolean
    createAt?: boolean
  }, ExtArgs["result"]["widgetTemplates"]>

  export type WidgetTemplatesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    types?: boolean
    defaultConfig?: boolean
    defaultLayout?: boolean
    createAt?: boolean
  }

  export type WidgetTemplatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "types" | "defaultConfig" | "defaultLayout" | "createAt", ExtArgs["result"]["widgetTemplates"]>
  export type WidgetTemplatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgets?: boolean | WidgetTemplates$widgetsArgs<ExtArgs>
    _count?: boolean | WidgetTemplatesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WidgetTemplatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WidgetTemplatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WidgetTemplatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WidgetTemplates"
    objects: {
      widgets: Prisma.$WidgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      types: string[]
      defaultConfig: string
      defaultLayout: string
      createAt: Date
    }, ExtArgs["result"]["widgetTemplates"]>
    composites: {}
  }

  type WidgetTemplatesGetPayload<S extends boolean | null | undefined | WidgetTemplatesDefaultArgs> = $Result.GetResult<Prisma.$WidgetTemplatesPayload, S>

  type WidgetTemplatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WidgetTemplatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WidgetTemplatesCountAggregateInputType | true
    }

  export interface WidgetTemplatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WidgetTemplates'], meta: { name: 'WidgetTemplates' } }
    /**
     * Find zero or one WidgetTemplates that matches the filter.
     * @param {WidgetTemplatesFindUniqueArgs} args - Arguments to find a WidgetTemplates
     * @example
     * // Get one WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WidgetTemplatesFindUniqueArgs>(args: SelectSubset<T, WidgetTemplatesFindUniqueArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WidgetTemplates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WidgetTemplatesFindUniqueOrThrowArgs} args - Arguments to find a WidgetTemplates
     * @example
     * // Get one WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WidgetTemplatesFindUniqueOrThrowArgs>(args: SelectSubset<T, WidgetTemplatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesFindFirstArgs} args - Arguments to find a WidgetTemplates
     * @example
     * // Get one WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WidgetTemplatesFindFirstArgs>(args?: SelectSubset<T, WidgetTemplatesFindFirstArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WidgetTemplates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesFindFirstOrThrowArgs} args - Arguments to find a WidgetTemplates
     * @example
     * // Get one WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WidgetTemplatesFindFirstOrThrowArgs>(args?: SelectSubset<T, WidgetTemplatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WidgetTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findMany()
     * 
     * // Get first 10 WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const widgetTemplatesWithIdOnly = await prisma.widgetTemplates.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WidgetTemplatesFindManyArgs>(args?: SelectSubset<T, WidgetTemplatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WidgetTemplates.
     * @param {WidgetTemplatesCreateArgs} args - Arguments to create a WidgetTemplates.
     * @example
     * // Create one WidgetTemplates
     * const WidgetTemplates = await prisma.widgetTemplates.create({
     *   data: {
     *     // ... data to create a WidgetTemplates
     *   }
     * })
     * 
     */
    create<T extends WidgetTemplatesCreateArgs>(args: SelectSubset<T, WidgetTemplatesCreateArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WidgetTemplates.
     * @param {WidgetTemplatesCreateManyArgs} args - Arguments to create many WidgetTemplates.
     * @example
     * // Create many WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WidgetTemplatesCreateManyArgs>(args?: SelectSubset<T, WidgetTemplatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WidgetTemplates and returns the data saved in the database.
     * @param {WidgetTemplatesCreateManyAndReturnArgs} args - Arguments to create many WidgetTemplates.
     * @example
     * // Create many WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WidgetTemplates and only return the `id`
     * const widgetTemplatesWithIdOnly = await prisma.widgetTemplates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WidgetTemplatesCreateManyAndReturnArgs>(args?: SelectSubset<T, WidgetTemplatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WidgetTemplates.
     * @param {WidgetTemplatesDeleteArgs} args - Arguments to delete one WidgetTemplates.
     * @example
     * // Delete one WidgetTemplates
     * const WidgetTemplates = await prisma.widgetTemplates.delete({
     *   where: {
     *     // ... filter to delete one WidgetTemplates
     *   }
     * })
     * 
     */
    delete<T extends WidgetTemplatesDeleteArgs>(args: SelectSubset<T, WidgetTemplatesDeleteArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WidgetTemplates.
     * @param {WidgetTemplatesUpdateArgs} args - Arguments to update one WidgetTemplates.
     * @example
     * // Update one WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WidgetTemplatesUpdateArgs>(args: SelectSubset<T, WidgetTemplatesUpdateArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WidgetTemplates.
     * @param {WidgetTemplatesDeleteManyArgs} args - Arguments to filter WidgetTemplates to delete.
     * @example
     * // Delete a few WidgetTemplates
     * const { count } = await prisma.widgetTemplates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WidgetTemplatesDeleteManyArgs>(args?: SelectSubset<T, WidgetTemplatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WidgetTemplatesUpdateManyArgs>(args: SelectSubset<T, WidgetTemplatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WidgetTemplates and returns the data updated in the database.
     * @param {WidgetTemplatesUpdateManyAndReturnArgs} args - Arguments to update many WidgetTemplates.
     * @example
     * // Update many WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WidgetTemplates and only return the `id`
     * const widgetTemplatesWithIdOnly = await prisma.widgetTemplates.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WidgetTemplatesUpdateManyAndReturnArgs>(args: SelectSubset<T, WidgetTemplatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WidgetTemplates.
     * @param {WidgetTemplatesUpsertArgs} args - Arguments to update or create a WidgetTemplates.
     * @example
     * // Update or create a WidgetTemplates
     * const widgetTemplates = await prisma.widgetTemplates.upsert({
     *   create: {
     *     // ... data to create a WidgetTemplates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WidgetTemplates we want to update
     *   }
     * })
     */
    upsert<T extends WidgetTemplatesUpsertArgs>(args: SelectSubset<T, WidgetTemplatesUpsertArgs<ExtArgs>>): Prisma__WidgetTemplatesClient<$Result.GetResult<Prisma.$WidgetTemplatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WidgetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesCountArgs} args - Arguments to filter WidgetTemplates to count.
     * @example
     * // Count the number of WidgetTemplates
     * const count = await prisma.widgetTemplates.count({
     *   where: {
     *     // ... the filter for the WidgetTemplates we want to count
     *   }
     * })
    **/
    count<T extends WidgetTemplatesCountArgs>(
      args?: Subset<T, WidgetTemplatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WidgetTemplatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WidgetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WidgetTemplatesAggregateArgs>(args: Subset<T, WidgetTemplatesAggregateArgs>): Prisma.PrismaPromise<GetWidgetTemplatesAggregateType<T>>

    /**
     * Group by WidgetTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WidgetTemplatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WidgetTemplatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WidgetTemplatesGroupByArgs['orderBy'] }
        : { orderBy?: WidgetTemplatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WidgetTemplatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWidgetTemplatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WidgetTemplates model
   */
  readonly fields: WidgetTemplatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WidgetTemplates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WidgetTemplatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    widgets<T extends WidgetTemplates$widgetsArgs<ExtArgs> = {}>(args?: Subset<T, WidgetTemplates$widgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WidgetTemplates model
   */
  interface WidgetTemplatesFieldRefs {
    readonly id: FieldRef<"WidgetTemplates", 'String'>
    readonly title: FieldRef<"WidgetTemplates", 'String'>
    readonly description: FieldRef<"WidgetTemplates", 'String'>
    readonly types: FieldRef<"WidgetTemplates", 'String[]'>
    readonly defaultConfig: FieldRef<"WidgetTemplates", 'String'>
    readonly defaultLayout: FieldRef<"WidgetTemplates", 'String'>
    readonly createAt: FieldRef<"WidgetTemplates", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WidgetTemplates findUnique
   */
  export type WidgetTemplatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter, which WidgetTemplates to fetch.
     */
    where: WidgetTemplatesWhereUniqueInput
  }

  /**
   * WidgetTemplates findUniqueOrThrow
   */
  export type WidgetTemplatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter, which WidgetTemplates to fetch.
     */
    where: WidgetTemplatesWhereUniqueInput
  }

  /**
   * WidgetTemplates findFirst
   */
  export type WidgetTemplatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter, which WidgetTemplates to fetch.
     */
    where?: WidgetTemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetTemplates to fetch.
     */
    orderBy?: WidgetTemplatesOrderByWithRelationInput | WidgetTemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetTemplates.
     */
    cursor?: WidgetTemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetTemplates.
     */
    distinct?: WidgetTemplatesScalarFieldEnum | WidgetTemplatesScalarFieldEnum[]
  }

  /**
   * WidgetTemplates findFirstOrThrow
   */
  export type WidgetTemplatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter, which WidgetTemplates to fetch.
     */
    where?: WidgetTemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetTemplates to fetch.
     */
    orderBy?: WidgetTemplatesOrderByWithRelationInput | WidgetTemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WidgetTemplates.
     */
    cursor?: WidgetTemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WidgetTemplates.
     */
    distinct?: WidgetTemplatesScalarFieldEnum | WidgetTemplatesScalarFieldEnum[]
  }

  /**
   * WidgetTemplates findMany
   */
  export type WidgetTemplatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter, which WidgetTemplates to fetch.
     */
    where?: WidgetTemplatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WidgetTemplates to fetch.
     */
    orderBy?: WidgetTemplatesOrderByWithRelationInput | WidgetTemplatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WidgetTemplates.
     */
    cursor?: WidgetTemplatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WidgetTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WidgetTemplates.
     */
    skip?: number
    distinct?: WidgetTemplatesScalarFieldEnum | WidgetTemplatesScalarFieldEnum[]
  }

  /**
   * WidgetTemplates create
   */
  export type WidgetTemplatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * The data needed to create a WidgetTemplates.
     */
    data: XOR<WidgetTemplatesCreateInput, WidgetTemplatesUncheckedCreateInput>
  }

  /**
   * WidgetTemplates createMany
   */
  export type WidgetTemplatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WidgetTemplates.
     */
    data: WidgetTemplatesCreateManyInput | WidgetTemplatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WidgetTemplates createManyAndReturn
   */
  export type WidgetTemplatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * The data used to create many WidgetTemplates.
     */
    data: WidgetTemplatesCreateManyInput | WidgetTemplatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WidgetTemplates update
   */
  export type WidgetTemplatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * The data needed to update a WidgetTemplates.
     */
    data: XOR<WidgetTemplatesUpdateInput, WidgetTemplatesUncheckedUpdateInput>
    /**
     * Choose, which WidgetTemplates to update.
     */
    where: WidgetTemplatesWhereUniqueInput
  }

  /**
   * WidgetTemplates updateMany
   */
  export type WidgetTemplatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WidgetTemplates.
     */
    data: XOR<WidgetTemplatesUpdateManyMutationInput, WidgetTemplatesUncheckedUpdateManyInput>
    /**
     * Filter which WidgetTemplates to update
     */
    where?: WidgetTemplatesWhereInput
    /**
     * Limit how many WidgetTemplates to update.
     */
    limit?: number
  }

  /**
   * WidgetTemplates updateManyAndReturn
   */
  export type WidgetTemplatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * The data used to update WidgetTemplates.
     */
    data: XOR<WidgetTemplatesUpdateManyMutationInput, WidgetTemplatesUncheckedUpdateManyInput>
    /**
     * Filter which WidgetTemplates to update
     */
    where?: WidgetTemplatesWhereInput
    /**
     * Limit how many WidgetTemplates to update.
     */
    limit?: number
  }

  /**
   * WidgetTemplates upsert
   */
  export type WidgetTemplatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * The filter to search for the WidgetTemplates to update in case it exists.
     */
    where: WidgetTemplatesWhereUniqueInput
    /**
     * In case the WidgetTemplates found by the `where` argument doesn't exist, create a new WidgetTemplates with this data.
     */
    create: XOR<WidgetTemplatesCreateInput, WidgetTemplatesUncheckedCreateInput>
    /**
     * In case the WidgetTemplates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WidgetTemplatesUpdateInput, WidgetTemplatesUncheckedUpdateInput>
  }

  /**
   * WidgetTemplates delete
   */
  export type WidgetTemplatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
    /**
     * Filter which WidgetTemplates to delete.
     */
    where: WidgetTemplatesWhereUniqueInput
  }

  /**
   * WidgetTemplates deleteMany
   */
  export type WidgetTemplatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WidgetTemplates to delete
     */
    where?: WidgetTemplatesWhereInput
    /**
     * Limit how many WidgetTemplates to delete.
     */
    limit?: number
  }

  /**
   * WidgetTemplates.widgets
   */
  export type WidgetTemplates$widgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Widget
     */
    select?: WidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Widget
     */
    omit?: WidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetInclude<ExtArgs> | null
    where?: WidgetWhereInput
    orderBy?: WidgetOrderByWithRelationInput | WidgetOrderByWithRelationInput[]
    cursor?: WidgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WidgetScalarFieldEnum | WidgetScalarFieldEnum[]
  }

  /**
   * WidgetTemplates without action
   */
  export type WidgetTemplatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WidgetTemplates
     */
    select?: WidgetTemplatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WidgetTemplates
     */
    omit?: WidgetTemplatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WidgetTemplatesInclude<ExtArgs> | null
  }


  /**
   * Model Dashboard
   */

  export type AggregateDashboard = {
    _count: DashboardCountAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  export type DashboardMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DashboardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DashboardCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DashboardMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type DashboardMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
  }

  export type DashboardCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboard to aggregate.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dashboards
    **/
    _count?: true | DashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardMaxAggregateInputType
  }

  export type GetDashboardAggregateType<T extends DashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboard[P]>
      : GetScalarType<T[P], AggregateDashboard[P]>
  }




  export type DashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithAggregationInput | DashboardOrderByWithAggregationInput[]
    by: DashboardScalarFieldEnum[] | DashboardScalarFieldEnum
    having?: DashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardCountAggregateInputType | true
    _min?: DashboardMinAggregateInputType
    _max?: DashboardMaxAggregateInputType
  }

  export type DashboardGroupByOutputType = {
    id: string
    name: string
    userId: string
    createAt: Date
    updateAt: Date
    _count: DashboardCountAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  type GetDashboardGroupByPayload<T extends DashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardGroupByOutputType[P]>
        }
      >
    >


  export type DashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dashboardWidgets?: boolean | Dashboard$dashboardWidgetsArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type DashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createAt" | "updateAt", ExtArgs["result"]["dashboard"]>
  export type DashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dashboardWidgets?: boolean | Dashboard$dashboardWidgetsArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dashboard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dashboardWidgets: Prisma.$DashboardWidgetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["dashboard"]>
    composites: {}
  }

  type DashboardGetPayload<S extends boolean | null | undefined | DashboardDefaultArgs> = $Result.GetResult<Prisma.$DashboardPayload, S>

  type DashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardCountAggregateInputType | true
    }

  export interface DashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dashboard'], meta: { name: 'Dashboard' } }
    /**
     * Find zero or one Dashboard that matches the filter.
     * @param {DashboardFindUniqueArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardFindUniqueArgs>(args: SelectSubset<T, DashboardFindUniqueArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardFindUniqueOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardFindFirstArgs>(args?: SelectSubset<T, DashboardFindFirstArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboard.findMany()
     * 
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardFindManyArgs>(args?: SelectSubset<T, DashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dashboard.
     * @param {DashboardCreateArgs} args - Arguments to create a Dashboard.
     * @example
     * // Create one Dashboard
     * const Dashboard = await prisma.dashboard.create({
     *   data: {
     *     // ... data to create a Dashboard
     *   }
     * })
     * 
     */
    create<T extends DashboardCreateArgs>(args: SelectSubset<T, DashboardCreateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dashboards.
     * @param {DashboardCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardCreateManyArgs>(args?: SelectSubset<T, DashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dashboards and returns the data saved in the database.
     * @param {DashboardCreateManyAndReturnArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dashboard.
     * @param {DashboardDeleteArgs} args - Arguments to delete one Dashboard.
     * @example
     * // Delete one Dashboard
     * const Dashboard = await prisma.dashboard.delete({
     *   where: {
     *     // ... filter to delete one Dashboard
     *   }
     * })
     * 
     */
    delete<T extends DashboardDeleteArgs>(args: SelectSubset<T, DashboardDeleteArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dashboard.
     * @param {DashboardUpdateArgs} args - Arguments to update one Dashboard.
     * @example
     * // Update one Dashboard
     * const dashboard = await prisma.dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardUpdateArgs>(args: SelectSubset<T, DashboardUpdateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dashboards.
     * @param {DashboardDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardDeleteManyArgs>(args?: SelectSubset<T, DashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardUpdateManyArgs>(args: SelectSubset<T, DashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards and returns the data updated in the database.
     * @param {DashboardUpdateManyAndReturnArgs} args - Arguments to update many Dashboards.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dashboard.
     * @param {DashboardUpsertArgs} args - Arguments to update or create a Dashboard.
     * @example
     * // Update or create a Dashboard
     * const dashboard = await prisma.dashboard.upsert({
     *   create: {
     *     // ... data to create a Dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboard we want to update
     *   }
     * })
     */
    upsert<T extends DashboardUpsertArgs>(args: SelectSubset<T, DashboardUpsertArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboard.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends DashboardCountArgs>(
      args?: Subset<T, DashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardAggregateArgs>(args: Subset<T, DashboardAggregateArgs>): Prisma.PrismaPromise<GetDashboardAggregateType<T>>

    /**
     * Group by Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardGroupByArgs['orderBy'] }
        : { orderBy?: DashboardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dashboard model
   */
  readonly fields: DashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dashboardWidgets<T extends Dashboard$dashboardWidgetsArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$dashboardWidgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dashboard model
   */
  interface DashboardFieldRefs {
    readonly id: FieldRef<"Dashboard", 'String'>
    readonly name: FieldRef<"Dashboard", 'String'>
    readonly userId: FieldRef<"Dashboard", 'String'>
    readonly createAt: FieldRef<"Dashboard", 'DateTime'>
    readonly updateAt: FieldRef<"Dashboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dashboard findUnique
   */
  export type DashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findUniqueOrThrow
   */
  export type DashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findFirst
   */
  export type DashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findFirstOrThrow
   */
  export type DashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findMany
   */
  export type DashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboards to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard create
   */
  export type DashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Dashboard.
     */
    data: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
  }

  /**
   * Dashboard createMany
   */
  export type DashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dashboard createManyAndReturn
   */
  export type DashboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard update
   */
  export type DashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Dashboard.
     */
    data: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
    /**
     * Choose, which Dashboard to update.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard updateMany
   */
  export type DashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
  }

  /**
   * Dashboard updateManyAndReturn
   */
  export type DashboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard upsert
   */
  export type DashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Dashboard to update in case it exists.
     */
    where: DashboardWhereUniqueInput
    /**
     * In case the Dashboard found by the `where` argument doesn't exist, create a new Dashboard with this data.
     */
    create: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
    /**
     * In case the Dashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
  }

  /**
   * Dashboard delete
   */
  export type DashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter which Dashboard to delete.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard deleteMany
   */
  export type DashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboards to delete
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to delete.
     */
    limit?: number
  }

  /**
   * Dashboard.dashboardWidgets
   */
  export type Dashboard$dashboardWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    where?: DashboardWidgetWhereInput
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    cursor?: DashboardWidgetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardWidgetScalarFieldEnum | DashboardWidgetScalarFieldEnum[]
  }

  /**
   * Dashboard without action
   */
  export type DashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
  }


  /**
   * Model DashboardWidget
   */

  export type AggregateDashboardWidget = {
    _count: DashboardWidgetCountAggregateOutputType | null
    _avg: DashboardWidgetAvgAggregateOutputType | null
    _sum: DashboardWidgetSumAggregateOutputType | null
    _min: DashboardWidgetMinAggregateOutputType | null
    _max: DashboardWidgetMaxAggregateOutputType | null
  }

  export type DashboardWidgetAvgAggregateOutputType = {
    x: number | null
    y: number | null
    w: number | null
    h: number | null
  }

  export type DashboardWidgetSumAggregateOutputType = {
    x: number | null
    y: number | null
    w: number | null
    h: number | null
  }

  export type DashboardWidgetMinAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    widgetId: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DashboardWidgetMaxAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    widgetId: string | null
    x: number | null
    y: number | null
    w: number | null
    h: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type DashboardWidgetCountAggregateOutputType = {
    id: number
    dashboardId: number
    widgetId: number
    x: number
    y: number
    w: number
    h: number
    instanceConfig: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type DashboardWidgetAvgAggregateInputType = {
    x?: true
    y?: true
    w?: true
    h?: true
  }

  export type DashboardWidgetSumAggregateInputType = {
    x?: true
    y?: true
    w?: true
    h?: true
  }

  export type DashboardWidgetMinAggregateInputType = {
    id?: true
    dashboardId?: true
    widgetId?: true
    x?: true
    y?: true
    w?: true
    h?: true
    createAt?: true
    updateAt?: true
  }

  export type DashboardWidgetMaxAggregateInputType = {
    id?: true
    dashboardId?: true
    widgetId?: true
    x?: true
    y?: true
    w?: true
    h?: true
    createAt?: true
    updateAt?: true
  }

  export type DashboardWidgetCountAggregateInputType = {
    id?: true
    dashboardId?: true
    widgetId?: true
    x?: true
    y?: true
    w?: true
    h?: true
    instanceConfig?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type DashboardWidgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardWidget to aggregate.
     */
    where?: DashboardWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardWidgets to fetch.
     */
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardWidgets
    **/
    _count?: true | DashboardWidgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardWidgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardWidgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardWidgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardWidgetMaxAggregateInputType
  }

  export type GetDashboardWidgetAggregateType<T extends DashboardWidgetAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardWidget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardWidget[P]>
      : GetScalarType<T[P], AggregateDashboardWidget[P]>
  }




  export type DashboardWidgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWidgetWhereInput
    orderBy?: DashboardWidgetOrderByWithAggregationInput | DashboardWidgetOrderByWithAggregationInput[]
    by: DashboardWidgetScalarFieldEnum[] | DashboardWidgetScalarFieldEnum
    having?: DashboardWidgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardWidgetCountAggregateInputType | true
    _avg?: DashboardWidgetAvgAggregateInputType
    _sum?: DashboardWidgetSumAggregateInputType
    _min?: DashboardWidgetMinAggregateInputType
    _max?: DashboardWidgetMaxAggregateInputType
  }

  export type DashboardWidgetGroupByOutputType = {
    id: string
    dashboardId: string
    widgetId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig: JsonValue | null
    createAt: Date
    updateAt: Date
    _count: DashboardWidgetCountAggregateOutputType | null
    _avg: DashboardWidgetAvgAggregateOutputType | null
    _sum: DashboardWidgetSumAggregateOutputType | null
    _min: DashboardWidgetMinAggregateOutputType | null
    _max: DashboardWidgetMaxAggregateOutputType | null
  }

  type GetDashboardWidgetGroupByPayload<T extends DashboardWidgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardWidgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardWidgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardWidgetGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardWidgetGroupByOutputType[P]>
        }
      >
    >


  export type DashboardWidgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    widgetId?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    instanceConfig?: boolean
    createAt?: boolean
    updateAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    widgetId?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    instanceConfig?: boolean
    createAt?: boolean
    updateAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    widgetId?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    instanceConfig?: boolean
    createAt?: boolean
    updateAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectScalar = {
    id?: boolean
    dashboardId?: boolean
    widgetId?: boolean
    x?: boolean
    y?: boolean
    w?: boolean
    h?: boolean
    instanceConfig?: boolean
    createAt?: boolean
    updateAt?: boolean
  }

  export type DashboardWidgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboardId" | "widgetId" | "x" | "y" | "w" | "h" | "instanceConfig" | "createAt" | "updateAt", ExtArgs["result"]["dashboardWidget"]>
  export type DashboardWidgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }
  export type DashboardWidgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }
  export type DashboardWidgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    widget?: boolean | WidgetDefaultArgs<ExtArgs>
  }

  export type $DashboardWidgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardWidget"
    objects: {
      dashboard: Prisma.$DashboardPayload<ExtArgs>
      widget: Prisma.$WidgetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dashboardId: string
      widgetId: string
      x: number
      y: number
      w: number
      h: number
      instanceConfig: Prisma.JsonValue | null
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["dashboardWidget"]>
    composites: {}
  }

  type DashboardWidgetGetPayload<S extends boolean | null | undefined | DashboardWidgetDefaultArgs> = $Result.GetResult<Prisma.$DashboardWidgetPayload, S>

  type DashboardWidgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardWidgetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardWidgetCountAggregateInputType | true
    }

  export interface DashboardWidgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardWidget'], meta: { name: 'DashboardWidget' } }
    /**
     * Find zero or one DashboardWidget that matches the filter.
     * @param {DashboardWidgetFindUniqueArgs} args - Arguments to find a DashboardWidget
     * @example
     * // Get one DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardWidgetFindUniqueArgs>(args: SelectSubset<T, DashboardWidgetFindUniqueArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardWidget that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardWidgetFindUniqueOrThrowArgs} args - Arguments to find a DashboardWidget
     * @example
     * // Get one DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardWidgetFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardWidgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardWidget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetFindFirstArgs} args - Arguments to find a DashboardWidget
     * @example
     * // Get one DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardWidgetFindFirstArgs>(args?: SelectSubset<T, DashboardWidgetFindFirstArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardWidget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetFindFirstOrThrowArgs} args - Arguments to find a DashboardWidget
     * @example
     * // Get one DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardWidgetFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardWidgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardWidgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardWidgets
     * const dashboardWidgets = await prisma.dashboardWidget.findMany()
     * 
     * // Get first 10 DashboardWidgets
     * const dashboardWidgets = await prisma.dashboardWidget.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardWidgetWithIdOnly = await prisma.dashboardWidget.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardWidgetFindManyArgs>(args?: SelectSubset<T, DashboardWidgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardWidget.
     * @param {DashboardWidgetCreateArgs} args - Arguments to create a DashboardWidget.
     * @example
     * // Create one DashboardWidget
     * const DashboardWidget = await prisma.dashboardWidget.create({
     *   data: {
     *     // ... data to create a DashboardWidget
     *   }
     * })
     * 
     */
    create<T extends DashboardWidgetCreateArgs>(args: SelectSubset<T, DashboardWidgetCreateArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardWidgets.
     * @param {DashboardWidgetCreateManyArgs} args - Arguments to create many DashboardWidgets.
     * @example
     * // Create many DashboardWidgets
     * const dashboardWidget = await prisma.dashboardWidget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardWidgetCreateManyArgs>(args?: SelectSubset<T, DashboardWidgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardWidgets and returns the data saved in the database.
     * @param {DashboardWidgetCreateManyAndReturnArgs} args - Arguments to create many DashboardWidgets.
     * @example
     * // Create many DashboardWidgets
     * const dashboardWidget = await prisma.dashboardWidget.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardWidgets and only return the `id`
     * const dashboardWidgetWithIdOnly = await prisma.dashboardWidget.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardWidgetCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardWidgetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardWidget.
     * @param {DashboardWidgetDeleteArgs} args - Arguments to delete one DashboardWidget.
     * @example
     * // Delete one DashboardWidget
     * const DashboardWidget = await prisma.dashboardWidget.delete({
     *   where: {
     *     // ... filter to delete one DashboardWidget
     *   }
     * })
     * 
     */
    delete<T extends DashboardWidgetDeleteArgs>(args: SelectSubset<T, DashboardWidgetDeleteArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardWidget.
     * @param {DashboardWidgetUpdateArgs} args - Arguments to update one DashboardWidget.
     * @example
     * // Update one DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardWidgetUpdateArgs>(args: SelectSubset<T, DashboardWidgetUpdateArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardWidgets.
     * @param {DashboardWidgetDeleteManyArgs} args - Arguments to filter DashboardWidgets to delete.
     * @example
     * // Delete a few DashboardWidgets
     * const { count } = await prisma.dashboardWidget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardWidgetDeleteManyArgs>(args?: SelectSubset<T, DashboardWidgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardWidgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardWidgets
     * const dashboardWidget = await prisma.dashboardWidget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardWidgetUpdateManyArgs>(args: SelectSubset<T, DashboardWidgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardWidgets and returns the data updated in the database.
     * @param {DashboardWidgetUpdateManyAndReturnArgs} args - Arguments to update many DashboardWidgets.
     * @example
     * // Update many DashboardWidgets
     * const dashboardWidget = await prisma.dashboardWidget.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardWidgets and only return the `id`
     * const dashboardWidgetWithIdOnly = await prisma.dashboardWidget.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DashboardWidgetUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardWidgetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardWidget.
     * @param {DashboardWidgetUpsertArgs} args - Arguments to update or create a DashboardWidget.
     * @example
     * // Update or create a DashboardWidget
     * const dashboardWidget = await prisma.dashboardWidget.upsert({
     *   create: {
     *     // ... data to create a DashboardWidget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardWidget we want to update
     *   }
     * })
     */
    upsert<T extends DashboardWidgetUpsertArgs>(args: SelectSubset<T, DashboardWidgetUpsertArgs<ExtArgs>>): Prisma__DashboardWidgetClient<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardWidgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetCountArgs} args - Arguments to filter DashboardWidgets to count.
     * @example
     * // Count the number of DashboardWidgets
     * const count = await prisma.dashboardWidget.count({
     *   where: {
     *     // ... the filter for the DashboardWidgets we want to count
     *   }
     * })
    **/
    count<T extends DashboardWidgetCountArgs>(
      args?: Subset<T, DashboardWidgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardWidgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardWidget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DashboardWidgetAggregateArgs>(args: Subset<T, DashboardWidgetAggregateArgs>): Prisma.PrismaPromise<GetDashboardWidgetAggregateType<T>>

    /**
     * Group by DashboardWidget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardWidgetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DashboardWidgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardWidgetGroupByArgs['orderBy'] }
        : { orderBy?: DashboardWidgetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DashboardWidgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardWidgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardWidget model
   */
  readonly fields: DashboardWidgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardWidget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardWidgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardDefaultArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    widget<T extends WidgetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WidgetDefaultArgs<ExtArgs>>): Prisma__WidgetClient<$Result.GetResult<Prisma.$WidgetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DashboardWidget model
   */
  interface DashboardWidgetFieldRefs {
    readonly id: FieldRef<"DashboardWidget", 'String'>
    readonly dashboardId: FieldRef<"DashboardWidget", 'String'>
    readonly widgetId: FieldRef<"DashboardWidget", 'String'>
    readonly x: FieldRef<"DashboardWidget", 'Int'>
    readonly y: FieldRef<"DashboardWidget", 'Int'>
    readonly w: FieldRef<"DashboardWidget", 'Int'>
    readonly h: FieldRef<"DashboardWidget", 'Int'>
    readonly instanceConfig: FieldRef<"DashboardWidget", 'Json'>
    readonly createAt: FieldRef<"DashboardWidget", 'DateTime'>
    readonly updateAt: FieldRef<"DashboardWidget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DashboardWidget findUnique
   */
  export type DashboardWidgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter, which DashboardWidget to fetch.
     */
    where: DashboardWidgetWhereUniqueInput
  }

  /**
   * DashboardWidget findUniqueOrThrow
   */
  export type DashboardWidgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter, which DashboardWidget to fetch.
     */
    where: DashboardWidgetWhereUniqueInput
  }

  /**
   * DashboardWidget findFirst
   */
  export type DashboardWidgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter, which DashboardWidget to fetch.
     */
    where?: DashboardWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardWidgets to fetch.
     */
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardWidgets.
     */
    cursor?: DashboardWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardWidgets.
     */
    distinct?: DashboardWidgetScalarFieldEnum | DashboardWidgetScalarFieldEnum[]
  }

  /**
   * DashboardWidget findFirstOrThrow
   */
  export type DashboardWidgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter, which DashboardWidget to fetch.
     */
    where?: DashboardWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardWidgets to fetch.
     */
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardWidgets.
     */
    cursor?: DashboardWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardWidgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardWidgets.
     */
    distinct?: DashboardWidgetScalarFieldEnum | DashboardWidgetScalarFieldEnum[]
  }

  /**
   * DashboardWidget findMany
   */
  export type DashboardWidgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter, which DashboardWidgets to fetch.
     */
    where?: DashboardWidgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardWidgets to fetch.
     */
    orderBy?: DashboardWidgetOrderByWithRelationInput | DashboardWidgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardWidgets.
     */
    cursor?: DashboardWidgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardWidgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardWidgets.
     */
    skip?: number
    distinct?: DashboardWidgetScalarFieldEnum | DashboardWidgetScalarFieldEnum[]
  }

  /**
   * DashboardWidget create
   */
  export type DashboardWidgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * The data needed to create a DashboardWidget.
     */
    data: XOR<DashboardWidgetCreateInput, DashboardWidgetUncheckedCreateInput>
  }

  /**
   * DashboardWidget createMany
   */
  export type DashboardWidgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardWidgets.
     */
    data: DashboardWidgetCreateManyInput | DashboardWidgetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DashboardWidget createManyAndReturn
   */
  export type DashboardWidgetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardWidgets.
     */
    data: DashboardWidgetCreateManyInput | DashboardWidgetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardWidget update
   */
  export type DashboardWidgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * The data needed to update a DashboardWidget.
     */
    data: XOR<DashboardWidgetUpdateInput, DashboardWidgetUncheckedUpdateInput>
    /**
     * Choose, which DashboardWidget to update.
     */
    where: DashboardWidgetWhereUniqueInput
  }

  /**
   * DashboardWidget updateMany
   */
  export type DashboardWidgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardWidgets.
     */
    data: XOR<DashboardWidgetUpdateManyMutationInput, DashboardWidgetUncheckedUpdateManyInput>
    /**
     * Filter which DashboardWidgets to update
     */
    where?: DashboardWidgetWhereInput
    /**
     * Limit how many DashboardWidgets to update.
     */
    limit?: number
  }

  /**
   * DashboardWidget updateManyAndReturn
   */
  export type DashboardWidgetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * The data used to update DashboardWidgets.
     */
    data: XOR<DashboardWidgetUpdateManyMutationInput, DashboardWidgetUncheckedUpdateManyInput>
    /**
     * Filter which DashboardWidgets to update
     */
    where?: DashboardWidgetWhereInput
    /**
     * Limit how many DashboardWidgets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardWidget upsert
   */
  export type DashboardWidgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * The filter to search for the DashboardWidget to update in case it exists.
     */
    where: DashboardWidgetWhereUniqueInput
    /**
     * In case the DashboardWidget found by the `where` argument doesn't exist, create a new DashboardWidget with this data.
     */
    create: XOR<DashboardWidgetCreateInput, DashboardWidgetUncheckedCreateInput>
    /**
     * In case the DashboardWidget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardWidgetUpdateInput, DashboardWidgetUncheckedUpdateInput>
  }

  /**
   * DashboardWidget delete
   */
  export type DashboardWidgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
    /**
     * Filter which DashboardWidget to delete.
     */
    where: DashboardWidgetWhereUniqueInput
  }

  /**
   * DashboardWidget deleteMany
   */
  export type DashboardWidgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardWidgets to delete
     */
    where?: DashboardWidgetWhereInput
    /**
     * Limit how many DashboardWidgets to delete.
     */
    limit?: number
  }

  /**
   * DashboardWidget without action
   */
  export type DashboardWidgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardWidget
     */
    select?: DashboardWidgetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardWidget
     */
    omit?: DashboardWidgetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardWidgetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WidgetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    config: 'config',
    layout: 'layout',
    templateId: 'templateId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type WidgetScalarFieldEnum = (typeof WidgetScalarFieldEnum)[keyof typeof WidgetScalarFieldEnum]


  export const WidgetTemplatesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    types: 'types',
    defaultConfig: 'defaultConfig',
    defaultLayout: 'defaultLayout',
    createAt: 'createAt'
  };

  export type WidgetTemplatesScalarFieldEnum = (typeof WidgetTemplatesScalarFieldEnum)[keyof typeof WidgetTemplatesScalarFieldEnum]


  export const DashboardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DashboardScalarFieldEnum = (typeof DashboardScalarFieldEnum)[keyof typeof DashboardScalarFieldEnum]


  export const DashboardWidgetScalarFieldEnum: {
    id: 'id',
    dashboardId: 'dashboardId',
    widgetId: 'widgetId',
    x: 'x',
    y: 'y',
    w: 'w',
    h: 'h',
    instanceConfig: 'instanceConfig',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type DashboardWidgetScalarFieldEnum = (typeof DashboardWidgetScalarFieldEnum)[keyof typeof DashboardWidgetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    dashboards?: DashboardListRelationFilter
    widgets?: WidgetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dashboards?: DashboardOrderByRelationAggregateInput
    widgets?: WidgetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    dashboards?: DashboardListRelationFilter
    widgets?: WidgetListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WidgetWhereInput = {
    AND?: WidgetWhereInput | WidgetWhereInput[]
    OR?: WidgetWhereInput[]
    NOT?: WidgetWhereInput | WidgetWhereInput[]
    id?: StringFilter<"Widget"> | string
    name?: StringFilter<"Widget"> | string
    userId?: StringFilter<"Widget"> | string
    config?: StringFilter<"Widget"> | string
    layout?: StringFilter<"Widget"> | string
    templateId?: StringNullableFilter<"Widget"> | string | null
    createAt?: DateTimeFilter<"Widget"> | Date | string
    updateAt?: DateTimeFilter<"Widget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dashboardWidgets?: DashboardWidgetListRelationFilter
    widgetTemplate?: XOR<WidgetTemplatesNullableScalarRelationFilter, WidgetTemplatesWhereInput> | null
  }

  export type WidgetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    config?: SortOrder
    layout?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
    dashboardWidgets?: DashboardWidgetOrderByRelationAggregateInput
    widgetTemplate?: WidgetTemplatesOrderByWithRelationInput
  }

  export type WidgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WidgetWhereInput | WidgetWhereInput[]
    OR?: WidgetWhereInput[]
    NOT?: WidgetWhereInput | WidgetWhereInput[]
    name?: StringFilter<"Widget"> | string
    userId?: StringFilter<"Widget"> | string
    config?: StringFilter<"Widget"> | string
    layout?: StringFilter<"Widget"> | string
    templateId?: StringNullableFilter<"Widget"> | string | null
    createAt?: DateTimeFilter<"Widget"> | Date | string
    updateAt?: DateTimeFilter<"Widget"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dashboardWidgets?: DashboardWidgetListRelationFilter
    widgetTemplate?: XOR<WidgetTemplatesNullableScalarRelationFilter, WidgetTemplatesWhereInput> | null
  }, "id">

  export type WidgetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    config?: SortOrder
    layout?: SortOrder
    templateId?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: WidgetCountOrderByAggregateInput
    _max?: WidgetMaxOrderByAggregateInput
    _min?: WidgetMinOrderByAggregateInput
  }

  export type WidgetScalarWhereWithAggregatesInput = {
    AND?: WidgetScalarWhereWithAggregatesInput | WidgetScalarWhereWithAggregatesInput[]
    OR?: WidgetScalarWhereWithAggregatesInput[]
    NOT?: WidgetScalarWhereWithAggregatesInput | WidgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Widget"> | string
    name?: StringWithAggregatesFilter<"Widget"> | string
    userId?: StringWithAggregatesFilter<"Widget"> | string
    config?: StringWithAggregatesFilter<"Widget"> | string
    layout?: StringWithAggregatesFilter<"Widget"> | string
    templateId?: StringNullableWithAggregatesFilter<"Widget"> | string | null
    createAt?: DateTimeWithAggregatesFilter<"Widget"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Widget"> | Date | string
  }

  export type WidgetTemplatesWhereInput = {
    AND?: WidgetTemplatesWhereInput | WidgetTemplatesWhereInput[]
    OR?: WidgetTemplatesWhereInput[]
    NOT?: WidgetTemplatesWhereInput | WidgetTemplatesWhereInput[]
    id?: StringFilter<"WidgetTemplates"> | string
    title?: StringFilter<"WidgetTemplates"> | string
    description?: StringFilter<"WidgetTemplates"> | string
    types?: StringNullableListFilter<"WidgetTemplates">
    defaultConfig?: StringFilter<"WidgetTemplates"> | string
    defaultLayout?: StringFilter<"WidgetTemplates"> | string
    createAt?: DateTimeFilter<"WidgetTemplates"> | Date | string
    widgets?: WidgetListRelationFilter
  }

  export type WidgetTemplatesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    types?: SortOrder
    defaultConfig?: SortOrder
    defaultLayout?: SortOrder
    createAt?: SortOrder
    widgets?: WidgetOrderByRelationAggregateInput
  }

  export type WidgetTemplatesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WidgetTemplatesWhereInput | WidgetTemplatesWhereInput[]
    OR?: WidgetTemplatesWhereInput[]
    NOT?: WidgetTemplatesWhereInput | WidgetTemplatesWhereInput[]
    title?: StringFilter<"WidgetTemplates"> | string
    description?: StringFilter<"WidgetTemplates"> | string
    types?: StringNullableListFilter<"WidgetTemplates">
    defaultConfig?: StringFilter<"WidgetTemplates"> | string
    defaultLayout?: StringFilter<"WidgetTemplates"> | string
    createAt?: DateTimeFilter<"WidgetTemplates"> | Date | string
    widgets?: WidgetListRelationFilter
  }, "id">

  export type WidgetTemplatesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    types?: SortOrder
    defaultConfig?: SortOrder
    defaultLayout?: SortOrder
    createAt?: SortOrder
    _count?: WidgetTemplatesCountOrderByAggregateInput
    _max?: WidgetTemplatesMaxOrderByAggregateInput
    _min?: WidgetTemplatesMinOrderByAggregateInput
  }

  export type WidgetTemplatesScalarWhereWithAggregatesInput = {
    AND?: WidgetTemplatesScalarWhereWithAggregatesInput | WidgetTemplatesScalarWhereWithAggregatesInput[]
    OR?: WidgetTemplatesScalarWhereWithAggregatesInput[]
    NOT?: WidgetTemplatesScalarWhereWithAggregatesInput | WidgetTemplatesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WidgetTemplates"> | string
    title?: StringWithAggregatesFilter<"WidgetTemplates"> | string
    description?: StringWithAggregatesFilter<"WidgetTemplates"> | string
    types?: StringNullableListFilter<"WidgetTemplates">
    defaultConfig?: StringWithAggregatesFilter<"WidgetTemplates"> | string
    defaultLayout?: StringWithAggregatesFilter<"WidgetTemplates"> | string
    createAt?: DateTimeWithAggregatesFilter<"WidgetTemplates"> | Date | string
  }

  export type DashboardWhereInput = {
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    id?: StringFilter<"Dashboard"> | string
    name?: StringFilter<"Dashboard"> | string
    userId?: StringFilter<"Dashboard"> | string
    createAt?: DateTimeFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeFilter<"Dashboard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dashboardWidgets?: DashboardWidgetListRelationFilter
  }

  export type DashboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    user?: UserOrderByWithRelationInput
    dashboardWidgets?: DashboardWidgetOrderByRelationAggregateInput
  }

  export type DashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    name?: StringFilter<"Dashboard"> | string
    userId?: StringFilter<"Dashboard"> | string
    createAt?: DateTimeFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeFilter<"Dashboard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    dashboardWidgets?: DashboardWidgetListRelationFilter
  }, "id">

  export type DashboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DashboardCountOrderByAggregateInput
    _max?: DashboardMaxOrderByAggregateInput
    _min?: DashboardMinOrderByAggregateInput
  }

  export type DashboardScalarWhereWithAggregatesInput = {
    AND?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    OR?: DashboardScalarWhereWithAggregatesInput[]
    NOT?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dashboard"> | string
    name?: StringWithAggregatesFilter<"Dashboard"> | string
    userId?: StringWithAggregatesFilter<"Dashboard"> | string
    createAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
  }

  export type DashboardWidgetWhereInput = {
    AND?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    OR?: DashboardWidgetWhereInput[]
    NOT?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    id?: StringFilter<"DashboardWidget"> | string
    dashboardId?: StringFilter<"DashboardWidget"> | string
    widgetId?: StringFilter<"DashboardWidget"> | string
    x?: IntFilter<"DashboardWidget"> | number
    y?: IntFilter<"DashboardWidget"> | number
    w?: IntFilter<"DashboardWidget"> | number
    h?: IntFilter<"DashboardWidget"> | number
    instanceConfig?: JsonNullableFilter<"DashboardWidget">
    createAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updateAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    widget?: XOR<WidgetScalarRelationFilter, WidgetWhereInput>
  }

  export type DashboardWidgetOrderByWithRelationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    widgetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    instanceConfig?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    dashboard?: DashboardOrderByWithRelationInput
    widget?: WidgetOrderByWithRelationInput
  }

  export type DashboardWidgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dashboardId_widgetId?: DashboardWidgetDashboardIdWidgetIdCompoundUniqueInput
    AND?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    OR?: DashboardWidgetWhereInput[]
    NOT?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    dashboardId?: StringFilter<"DashboardWidget"> | string
    widgetId?: StringFilter<"DashboardWidget"> | string
    x?: IntFilter<"DashboardWidget"> | number
    y?: IntFilter<"DashboardWidget"> | number
    w?: IntFilter<"DashboardWidget"> | number
    h?: IntFilter<"DashboardWidget"> | number
    instanceConfig?: JsonNullableFilter<"DashboardWidget">
    createAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updateAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    widget?: XOR<WidgetScalarRelationFilter, WidgetWhereInput>
  }, "id" | "dashboardId_widgetId">

  export type DashboardWidgetOrderByWithAggregationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    widgetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    instanceConfig?: SortOrderInput | SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: DashboardWidgetCountOrderByAggregateInput
    _avg?: DashboardWidgetAvgOrderByAggregateInput
    _max?: DashboardWidgetMaxOrderByAggregateInput
    _min?: DashboardWidgetMinOrderByAggregateInput
    _sum?: DashboardWidgetSumOrderByAggregateInput
  }

  export type DashboardWidgetScalarWhereWithAggregatesInput = {
    AND?: DashboardWidgetScalarWhereWithAggregatesInput | DashboardWidgetScalarWhereWithAggregatesInput[]
    OR?: DashboardWidgetScalarWhereWithAggregatesInput[]
    NOT?: DashboardWidgetScalarWhereWithAggregatesInput | DashboardWidgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardWidget"> | string
    dashboardId?: StringWithAggregatesFilter<"DashboardWidget"> | string
    widgetId?: StringWithAggregatesFilter<"DashboardWidget"> | string
    x?: IntWithAggregatesFilter<"DashboardWidget"> | number
    y?: IntWithAggregatesFilter<"DashboardWidget"> | number
    w?: IntWithAggregatesFilter<"DashboardWidget"> | number
    h?: IntWithAggregatesFilter<"DashboardWidget"> | number
    instanceConfig?: JsonNullableWithAggregatesFilter<"DashboardWidget">
    createAt?: DateTimeWithAggregatesFilter<"DashboardWidget"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"DashboardWidget"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    widgets?: WidgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    widgets?: WidgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    widgets?: WidgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    widgets?: WidgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetCreateInput = {
    id?: string
    name: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutWidgetsInput
    dashboardWidgets?: DashboardWidgetCreateNestedManyWithoutWidgetInput
    widgetTemplate?: WidgetTemplatesCreateNestedOneWithoutWidgetsInput
  }

  export type WidgetUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    config: string
    layout: string
    templateId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetUncheckedCreateNestedManyWithoutWidgetInput
  }

  export type WidgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWidgetsNestedInput
    dashboardWidgets?: DashboardWidgetUpdateManyWithoutWidgetNestedInput
    widgetTemplate?: WidgetTemplatesUpdateOneWithoutWidgetsNestedInput
  }

  export type WidgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUncheckedUpdateManyWithoutWidgetNestedInput
  }

  export type WidgetCreateManyInput = {
    id?: string
    name: string
    userId: string
    config: string
    layout: string
    templateId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WidgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetTemplatesCreateInput = {
    id?: string
    title: string
    description: string
    types?: WidgetTemplatesCreatetypesInput | string[]
    defaultConfig: string
    defaultLayout: string
    createAt?: Date | string
    widgets?: WidgetCreateNestedManyWithoutWidgetTemplateInput
  }

  export type WidgetTemplatesUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    types?: WidgetTemplatesCreatetypesInput | string[]
    defaultConfig: string
    defaultLayout: string
    createAt?: Date | string
    widgets?: WidgetUncheckedCreateNestedManyWithoutWidgetTemplateInput
  }

  export type WidgetTemplatesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: WidgetUpdateManyWithoutWidgetTemplateNestedInput
  }

  export type WidgetTemplatesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: WidgetUncheckedUpdateManyWithoutWidgetTemplateNestedInput
  }

  export type WidgetTemplatesCreateManyInput = {
    id?: string
    title: string
    description: string
    types?: WidgetTemplatesCreatetypesInput | string[]
    defaultConfig: string
    defaultLayout: string
    createAt?: Date | string
  }

  export type WidgetTemplatesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetTemplatesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
    dashboardWidgets?: DashboardWidgetCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
    dashboardWidgets?: DashboardWidgetUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardCreateManyInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateInput = {
    id?: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
    dashboard: DashboardCreateNestedOneWithoutDashboardWidgetsInput
    widget: WidgetCreateNestedOneWithoutDashboardWidgetsInput
  }

  export type DashboardWidgetUncheckedCreateInput = {
    id?: string
    dashboardId: string
    widgetId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard?: DashboardUpdateOneRequiredWithoutDashboardWidgetsNestedInput
    widget?: WidgetUpdateOneRequiredWithoutDashboardWidgetsNestedInput
  }

  export type DashboardWidgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateManyInput = {
    id?: string
    dashboardId: string
    widgetId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DashboardListRelationFilter = {
    every?: DashboardWhereInput
    some?: DashboardWhereInput
    none?: DashboardWhereInput
  }

  export type WidgetListRelationFilter = {
    every?: WidgetWhereInput
    some?: WidgetWhereInput
    none?: WidgetWhereInput
  }

  export type DashboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WidgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DashboardWidgetListRelationFilter = {
    every?: DashboardWidgetWhereInput
    some?: DashboardWidgetWhereInput
    none?: DashboardWidgetWhereInput
  }

  export type WidgetTemplatesNullableScalarRelationFilter = {
    is?: WidgetTemplatesWhereInput | null
    isNot?: WidgetTemplatesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DashboardWidgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WidgetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    config?: SortOrder
    layout?: SortOrder
    templateId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type WidgetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    config?: SortOrder
    layout?: SortOrder
    templateId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type WidgetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    config?: SortOrder
    layout?: SortOrder
    templateId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WidgetTemplatesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    types?: SortOrder
    defaultConfig?: SortOrder
    defaultLayout?: SortOrder
    createAt?: SortOrder
  }

  export type WidgetTemplatesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    defaultConfig?: SortOrder
    defaultLayout?: SortOrder
    createAt?: SortOrder
  }

  export type WidgetTemplatesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    defaultConfig?: SortOrder
    defaultLayout?: SortOrder
    createAt?: SortOrder
  }

  export type DashboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DashboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DashboardScalarRelationFilter = {
    is?: DashboardWhereInput
    isNot?: DashboardWhereInput
  }

  export type WidgetScalarRelationFilter = {
    is?: WidgetWhereInput
    isNot?: WidgetWhereInput
  }

  export type DashboardWidgetDashboardIdWidgetIdCompoundUniqueInput = {
    dashboardId: string
    widgetId: string
  }

  export type DashboardWidgetCountOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    widgetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    instanceConfig?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DashboardWidgetAvgOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
  }

  export type DashboardWidgetMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    widgetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DashboardWidgetMinOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    widgetId?: SortOrder
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type DashboardWidgetSumOrderByAggregateInput = {
    x?: SortOrder
    y?: SortOrder
    w?: SortOrder
    h?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DashboardCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type WidgetCreateNestedManyWithoutUserInput = {
    create?: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput> | WidgetCreateWithoutUserInput[] | WidgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutUserInput | WidgetCreateOrConnectWithoutUserInput[]
    createMany?: WidgetCreateManyUserInputEnvelope
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
  }

  export type DashboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type WidgetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput> | WidgetCreateWithoutUserInput[] | WidgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutUserInput | WidgetCreateOrConnectWithoutUserInput[]
    createMany?: WidgetCreateManyUserInputEnvelope
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DashboardUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput | DashboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutUserInput | DashboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutUserInput | DashboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type WidgetUpdateManyWithoutUserNestedInput = {
    create?: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput> | WidgetCreateWithoutUserInput[] | WidgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutUserInput | WidgetCreateOrConnectWithoutUserInput[]
    upsert?: WidgetUpsertWithWhereUniqueWithoutUserInput | WidgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WidgetCreateManyUserInputEnvelope
    set?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    disconnect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    delete?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    update?: WidgetUpdateWithWhereUniqueWithoutUserInput | WidgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WidgetUpdateManyWithWhereWithoutUserInput | WidgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
  }

  export type DashboardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput | DashboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutUserInput | DashboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutUserInput | DashboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type WidgetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput> | WidgetCreateWithoutUserInput[] | WidgetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutUserInput | WidgetCreateOrConnectWithoutUserInput[]
    upsert?: WidgetUpsertWithWhereUniqueWithoutUserInput | WidgetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WidgetCreateManyUserInputEnvelope
    set?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    disconnect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    delete?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    update?: WidgetUpdateWithWhereUniqueWithoutUserInput | WidgetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WidgetUpdateManyWithWhereWithoutUserInput | WidgetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWidgetsInput = {
    create?: XOR<UserCreateWithoutWidgetsInput, UserUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWidgetsInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardWidgetCreateNestedManyWithoutWidgetInput = {
    create?: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput> | DashboardWidgetCreateWithoutWidgetInput[] | DashboardWidgetUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutWidgetInput | DashboardWidgetCreateOrConnectWithoutWidgetInput[]
    createMany?: DashboardWidgetCreateManyWidgetInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
  }

  export type WidgetTemplatesCreateNestedOneWithoutWidgetsInput = {
    create?: XOR<WidgetTemplatesCreateWithoutWidgetsInput, WidgetTemplatesUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: WidgetTemplatesCreateOrConnectWithoutWidgetsInput
    connect?: WidgetTemplatesWhereUniqueInput
  }

  export type DashboardWidgetUncheckedCreateNestedManyWithoutWidgetInput = {
    create?: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput> | DashboardWidgetCreateWithoutWidgetInput[] | DashboardWidgetUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutWidgetInput | DashboardWidgetCreateOrConnectWithoutWidgetInput[]
    createMany?: DashboardWidgetCreateManyWidgetInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWidgetsNestedInput = {
    create?: XOR<UserCreateWithoutWidgetsInput, UserUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWidgetsInput
    upsert?: UserUpsertWithoutWidgetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWidgetsInput, UserUpdateWithoutWidgetsInput>, UserUncheckedUpdateWithoutWidgetsInput>
  }

  export type DashboardWidgetUpdateManyWithoutWidgetNestedInput = {
    create?: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput> | DashboardWidgetCreateWithoutWidgetInput[] | DashboardWidgetUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutWidgetInput | DashboardWidgetCreateOrConnectWithoutWidgetInput[]
    upsert?: DashboardWidgetUpsertWithWhereUniqueWithoutWidgetInput | DashboardWidgetUpsertWithWhereUniqueWithoutWidgetInput[]
    createMany?: DashboardWidgetCreateManyWidgetInputEnvelope
    set?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    disconnect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    delete?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    update?: DashboardWidgetUpdateWithWhereUniqueWithoutWidgetInput | DashboardWidgetUpdateWithWhereUniqueWithoutWidgetInput[]
    updateMany?: DashboardWidgetUpdateManyWithWhereWithoutWidgetInput | DashboardWidgetUpdateManyWithWhereWithoutWidgetInput[]
    deleteMany?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
  }

  export type WidgetTemplatesUpdateOneWithoutWidgetsNestedInput = {
    create?: XOR<WidgetTemplatesCreateWithoutWidgetsInput, WidgetTemplatesUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: WidgetTemplatesCreateOrConnectWithoutWidgetsInput
    upsert?: WidgetTemplatesUpsertWithoutWidgetsInput
    disconnect?: WidgetTemplatesWhereInput | boolean
    delete?: WidgetTemplatesWhereInput | boolean
    connect?: WidgetTemplatesWhereUniqueInput
    update?: XOR<XOR<WidgetTemplatesUpdateToOneWithWhereWithoutWidgetsInput, WidgetTemplatesUpdateWithoutWidgetsInput>, WidgetTemplatesUncheckedUpdateWithoutWidgetsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DashboardWidgetUncheckedUpdateManyWithoutWidgetNestedInput = {
    create?: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput> | DashboardWidgetCreateWithoutWidgetInput[] | DashboardWidgetUncheckedCreateWithoutWidgetInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutWidgetInput | DashboardWidgetCreateOrConnectWithoutWidgetInput[]
    upsert?: DashboardWidgetUpsertWithWhereUniqueWithoutWidgetInput | DashboardWidgetUpsertWithWhereUniqueWithoutWidgetInput[]
    createMany?: DashboardWidgetCreateManyWidgetInputEnvelope
    set?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    disconnect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    delete?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    update?: DashboardWidgetUpdateWithWhereUniqueWithoutWidgetInput | DashboardWidgetUpdateWithWhereUniqueWithoutWidgetInput[]
    updateMany?: DashboardWidgetUpdateManyWithWhereWithoutWidgetInput | DashboardWidgetUpdateManyWithWhereWithoutWidgetInput[]
    deleteMany?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
  }

  export type WidgetTemplatesCreatetypesInput = {
    set: string[]
  }

  export type WidgetCreateNestedManyWithoutWidgetTemplateInput = {
    create?: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput> | WidgetCreateWithoutWidgetTemplateInput[] | WidgetUncheckedCreateWithoutWidgetTemplateInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutWidgetTemplateInput | WidgetCreateOrConnectWithoutWidgetTemplateInput[]
    createMany?: WidgetCreateManyWidgetTemplateInputEnvelope
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
  }

  export type WidgetUncheckedCreateNestedManyWithoutWidgetTemplateInput = {
    create?: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput> | WidgetCreateWithoutWidgetTemplateInput[] | WidgetUncheckedCreateWithoutWidgetTemplateInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutWidgetTemplateInput | WidgetCreateOrConnectWithoutWidgetTemplateInput[]
    createMany?: WidgetCreateManyWidgetTemplateInputEnvelope
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
  }

  export type WidgetTemplatesUpdatetypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WidgetUpdateManyWithoutWidgetTemplateNestedInput = {
    create?: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput> | WidgetCreateWithoutWidgetTemplateInput[] | WidgetUncheckedCreateWithoutWidgetTemplateInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutWidgetTemplateInput | WidgetCreateOrConnectWithoutWidgetTemplateInput[]
    upsert?: WidgetUpsertWithWhereUniqueWithoutWidgetTemplateInput | WidgetUpsertWithWhereUniqueWithoutWidgetTemplateInput[]
    createMany?: WidgetCreateManyWidgetTemplateInputEnvelope
    set?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    disconnect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    delete?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    update?: WidgetUpdateWithWhereUniqueWithoutWidgetTemplateInput | WidgetUpdateWithWhereUniqueWithoutWidgetTemplateInput[]
    updateMany?: WidgetUpdateManyWithWhereWithoutWidgetTemplateInput | WidgetUpdateManyWithWhereWithoutWidgetTemplateInput[]
    deleteMany?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
  }

  export type WidgetUncheckedUpdateManyWithoutWidgetTemplateNestedInput = {
    create?: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput> | WidgetCreateWithoutWidgetTemplateInput[] | WidgetUncheckedCreateWithoutWidgetTemplateInput[]
    connectOrCreate?: WidgetCreateOrConnectWithoutWidgetTemplateInput | WidgetCreateOrConnectWithoutWidgetTemplateInput[]
    upsert?: WidgetUpsertWithWhereUniqueWithoutWidgetTemplateInput | WidgetUpsertWithWhereUniqueWithoutWidgetTemplateInput[]
    createMany?: WidgetCreateManyWidgetTemplateInputEnvelope
    set?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    disconnect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    delete?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    connect?: WidgetWhereUniqueInput | WidgetWhereUniqueInput[]
    update?: WidgetUpdateWithWhereUniqueWithoutWidgetTemplateInput | WidgetUpdateWithWhereUniqueWithoutWidgetTemplateInput[]
    updateMany?: WidgetUpdateManyWithWhereWithoutWidgetTemplateInput | WidgetUpdateManyWithWhereWithoutWidgetTemplateInput[]
    deleteMany?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDashboardsInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardWidgetCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
  }

  export type DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDashboardsNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    upsert?: UserUpsertWithoutDashboardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsInput, UserUpdateWithoutDashboardsInput>, UserUncheckedUpdateWithoutDashboardsInput>
  }

  export type DashboardWidgetUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardWidgetUpsertWithWhereUniqueWithoutDashboardInput | DashboardWidgetUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    set?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    disconnect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    delete?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    update?: DashboardWidgetUpdateWithWhereUniqueWithoutDashboardInput | DashboardWidgetUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardWidgetUpdateManyWithWhereWithoutDashboardInput | DashboardWidgetUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
  }

  export type DashboardWidgetUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardWidgetUpsertWithWhereUniqueWithoutDashboardInput | DashboardWidgetUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    set?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    disconnect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    delete?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
    update?: DashboardWidgetUpdateWithWhereUniqueWithoutDashboardInput | DashboardWidgetUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardWidgetUpdateManyWithWhereWithoutDashboardInput | DashboardWidgetUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
  }

  export type DashboardCreateNestedOneWithoutDashboardWidgetsInput = {
    create?: XOR<DashboardCreateWithoutDashboardWidgetsInput, DashboardUncheckedCreateWithoutDashboardWidgetsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardWidgetsInput
    connect?: DashboardWhereUniqueInput
  }

  export type WidgetCreateNestedOneWithoutDashboardWidgetsInput = {
    create?: XOR<WidgetCreateWithoutDashboardWidgetsInput, WidgetUncheckedCreateWithoutDashboardWidgetsInput>
    connectOrCreate?: WidgetCreateOrConnectWithoutDashboardWidgetsInput
    connect?: WidgetWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DashboardUpdateOneRequiredWithoutDashboardWidgetsNestedInput = {
    create?: XOR<DashboardCreateWithoutDashboardWidgetsInput, DashboardUncheckedCreateWithoutDashboardWidgetsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboardWidgetsInput
    upsert?: DashboardUpsertWithoutDashboardWidgetsInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutDashboardWidgetsInput, DashboardUpdateWithoutDashboardWidgetsInput>, DashboardUncheckedUpdateWithoutDashboardWidgetsInput>
  }

  export type WidgetUpdateOneRequiredWithoutDashboardWidgetsNestedInput = {
    create?: XOR<WidgetCreateWithoutDashboardWidgetsInput, WidgetUncheckedCreateWithoutDashboardWidgetsInput>
    connectOrCreate?: WidgetCreateOrConnectWithoutDashboardWidgetsInput
    upsert?: WidgetUpsertWithoutDashboardWidgetsInput
    connect?: WidgetWhereUniqueInput
    update?: XOR<XOR<WidgetUpdateToOneWithWhereWithoutDashboardWidgetsInput, WidgetUpdateWithoutDashboardWidgetsInput>, WidgetUncheckedUpdateWithoutDashboardWidgetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DashboardCreateWithoutUserInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutUserInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput>
  }

  export type DashboardCreateManyUserInputEnvelope = {
    data: DashboardCreateManyUserInput | DashboardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WidgetCreateWithoutUserInput = {
    id?: string
    name: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetCreateNestedManyWithoutWidgetInput
    widgetTemplate?: WidgetTemplatesCreateNestedOneWithoutWidgetsInput
  }

  export type WidgetUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    config: string
    layout: string
    templateId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetUncheckedCreateNestedManyWithoutWidgetInput
  }

  export type WidgetCreateOrConnectWithoutUserInput = {
    where: WidgetWhereUniqueInput
    create: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput>
  }

  export type WidgetCreateManyUserInputEnvelope = {
    data: WidgetCreateManyUserInput | WidgetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DashboardUpsertWithWhereUniqueWithoutUserInput = {
    where: DashboardWhereUniqueInput
    update: XOR<DashboardUpdateWithoutUserInput, DashboardUncheckedUpdateWithoutUserInput>
    create: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput>
  }

  export type DashboardUpdateWithWhereUniqueWithoutUserInput = {
    where: DashboardWhereUniqueInput
    data: XOR<DashboardUpdateWithoutUserInput, DashboardUncheckedUpdateWithoutUserInput>
  }

  export type DashboardUpdateManyWithWhereWithoutUserInput = {
    where: DashboardScalarWhereInput
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyWithoutUserInput>
  }

  export type DashboardScalarWhereInput = {
    AND?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    OR?: DashboardScalarWhereInput[]
    NOT?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    id?: StringFilter<"Dashboard"> | string
    name?: StringFilter<"Dashboard"> | string
    userId?: StringFilter<"Dashboard"> | string
    createAt?: DateTimeFilter<"Dashboard"> | Date | string
    updateAt?: DateTimeFilter<"Dashboard"> | Date | string
  }

  export type WidgetUpsertWithWhereUniqueWithoutUserInput = {
    where: WidgetWhereUniqueInput
    update: XOR<WidgetUpdateWithoutUserInput, WidgetUncheckedUpdateWithoutUserInput>
    create: XOR<WidgetCreateWithoutUserInput, WidgetUncheckedCreateWithoutUserInput>
  }

  export type WidgetUpdateWithWhereUniqueWithoutUserInput = {
    where: WidgetWhereUniqueInput
    data: XOR<WidgetUpdateWithoutUserInput, WidgetUncheckedUpdateWithoutUserInput>
  }

  export type WidgetUpdateManyWithWhereWithoutUserInput = {
    where: WidgetScalarWhereInput
    data: XOR<WidgetUpdateManyMutationInput, WidgetUncheckedUpdateManyWithoutUserInput>
  }

  export type WidgetScalarWhereInput = {
    AND?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
    OR?: WidgetScalarWhereInput[]
    NOT?: WidgetScalarWhereInput | WidgetScalarWhereInput[]
    id?: StringFilter<"Widget"> | string
    name?: StringFilter<"Widget"> | string
    userId?: StringFilter<"Widget"> | string
    config?: StringFilter<"Widget"> | string
    layout?: StringFilter<"Widget"> | string
    templateId?: StringNullableFilter<"Widget"> | string | null
    createAt?: DateTimeFilter<"Widget"> | Date | string
    updateAt?: DateTimeFilter<"Widget"> | Date | string
  }

  export type UserCreateWithoutWidgetsInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboards?: DashboardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWidgetsInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWidgetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWidgetsInput, UserUncheckedCreateWithoutWidgetsInput>
  }

  export type DashboardWidgetCreateWithoutWidgetInput = {
    id?: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
    dashboard: DashboardCreateNestedOneWithoutDashboardWidgetsInput
  }

  export type DashboardWidgetUncheckedCreateWithoutWidgetInput = {
    id?: string
    dashboardId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetCreateOrConnectWithoutWidgetInput = {
    where: DashboardWidgetWhereUniqueInput
    create: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput>
  }

  export type DashboardWidgetCreateManyWidgetInputEnvelope = {
    data: DashboardWidgetCreateManyWidgetInput | DashboardWidgetCreateManyWidgetInput[]
    skipDuplicates?: boolean
  }

  export type WidgetTemplatesCreateWithoutWidgetsInput = {
    id?: string
    title: string
    description: string
    types?: WidgetTemplatesCreatetypesInput | string[]
    defaultConfig: string
    defaultLayout: string
    createAt?: Date | string
  }

  export type WidgetTemplatesUncheckedCreateWithoutWidgetsInput = {
    id?: string
    title: string
    description: string
    types?: WidgetTemplatesCreatetypesInput | string[]
    defaultConfig: string
    defaultLayout: string
    createAt?: Date | string
  }

  export type WidgetTemplatesCreateOrConnectWithoutWidgetsInput = {
    where: WidgetTemplatesWhereUniqueInput
    create: XOR<WidgetTemplatesCreateWithoutWidgetsInput, WidgetTemplatesUncheckedCreateWithoutWidgetsInput>
  }

  export type UserUpsertWithoutWidgetsInput = {
    update: XOR<UserUpdateWithoutWidgetsInput, UserUncheckedUpdateWithoutWidgetsInput>
    create: XOR<UserCreateWithoutWidgetsInput, UserUncheckedCreateWithoutWidgetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWidgetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWidgetsInput, UserUncheckedUpdateWithoutWidgetsInput>
  }

  export type UserUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DashboardWidgetUpsertWithWhereUniqueWithoutWidgetInput = {
    where: DashboardWidgetWhereUniqueInput
    update: XOR<DashboardWidgetUpdateWithoutWidgetInput, DashboardWidgetUncheckedUpdateWithoutWidgetInput>
    create: XOR<DashboardWidgetCreateWithoutWidgetInput, DashboardWidgetUncheckedCreateWithoutWidgetInput>
  }

  export type DashboardWidgetUpdateWithWhereUniqueWithoutWidgetInput = {
    where: DashboardWidgetWhereUniqueInput
    data: XOR<DashboardWidgetUpdateWithoutWidgetInput, DashboardWidgetUncheckedUpdateWithoutWidgetInput>
  }

  export type DashboardWidgetUpdateManyWithWhereWithoutWidgetInput = {
    where: DashboardWidgetScalarWhereInput
    data: XOR<DashboardWidgetUpdateManyMutationInput, DashboardWidgetUncheckedUpdateManyWithoutWidgetInput>
  }

  export type DashboardWidgetScalarWhereInput = {
    AND?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
    OR?: DashboardWidgetScalarWhereInput[]
    NOT?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
    id?: StringFilter<"DashboardWidget"> | string
    dashboardId?: StringFilter<"DashboardWidget"> | string
    widgetId?: StringFilter<"DashboardWidget"> | string
    x?: IntFilter<"DashboardWidget"> | number
    y?: IntFilter<"DashboardWidget"> | number
    w?: IntFilter<"DashboardWidget"> | number
    h?: IntFilter<"DashboardWidget"> | number
    instanceConfig?: JsonNullableFilter<"DashboardWidget">
    createAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updateAt?: DateTimeFilter<"DashboardWidget"> | Date | string
  }

  export type WidgetTemplatesUpsertWithoutWidgetsInput = {
    update: XOR<WidgetTemplatesUpdateWithoutWidgetsInput, WidgetTemplatesUncheckedUpdateWithoutWidgetsInput>
    create: XOR<WidgetTemplatesCreateWithoutWidgetsInput, WidgetTemplatesUncheckedCreateWithoutWidgetsInput>
    where?: WidgetTemplatesWhereInput
  }

  export type WidgetTemplatesUpdateToOneWithWhereWithoutWidgetsInput = {
    where?: WidgetTemplatesWhereInput
    data: XOR<WidgetTemplatesUpdateWithoutWidgetsInput, WidgetTemplatesUncheckedUpdateWithoutWidgetsInput>
  }

  export type WidgetTemplatesUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetTemplatesUncheckedUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    types?: WidgetTemplatesUpdatetypesInput | string[]
    defaultConfig?: StringFieldUpdateOperationsInput | string
    defaultLayout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetCreateWithoutWidgetTemplateInput = {
    id?: string
    name: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutWidgetsInput
    dashboardWidgets?: DashboardWidgetCreateNestedManyWithoutWidgetInput
  }

  export type WidgetUncheckedCreateWithoutWidgetTemplateInput = {
    id?: string
    name: string
    userId: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
    dashboardWidgets?: DashboardWidgetUncheckedCreateNestedManyWithoutWidgetInput
  }

  export type WidgetCreateOrConnectWithoutWidgetTemplateInput = {
    where: WidgetWhereUniqueInput
    create: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput>
  }

  export type WidgetCreateManyWidgetTemplateInputEnvelope = {
    data: WidgetCreateManyWidgetTemplateInput | WidgetCreateManyWidgetTemplateInput[]
    skipDuplicates?: boolean
  }

  export type WidgetUpsertWithWhereUniqueWithoutWidgetTemplateInput = {
    where: WidgetWhereUniqueInput
    update: XOR<WidgetUpdateWithoutWidgetTemplateInput, WidgetUncheckedUpdateWithoutWidgetTemplateInput>
    create: XOR<WidgetCreateWithoutWidgetTemplateInput, WidgetUncheckedCreateWithoutWidgetTemplateInput>
  }

  export type WidgetUpdateWithWhereUniqueWithoutWidgetTemplateInput = {
    where: WidgetWhereUniqueInput
    data: XOR<WidgetUpdateWithoutWidgetTemplateInput, WidgetUncheckedUpdateWithoutWidgetTemplateInput>
  }

  export type WidgetUpdateManyWithWhereWithoutWidgetTemplateInput = {
    where: WidgetScalarWhereInput
    data: XOR<WidgetUpdateManyMutationInput, WidgetUncheckedUpdateManyWithoutWidgetTemplateInput>
  }

  export type UserCreateWithoutDashboardsInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    widgets?: WidgetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardsInput = {
    id?: string
    email: string
    name: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    widgets?: WidgetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
  }

  export type DashboardWidgetCreateWithoutDashboardInput = {
    id?: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
    widget: WidgetCreateNestedOneWithoutDashboardWidgetsInput
  }

  export type DashboardWidgetUncheckedCreateWithoutDashboardInput = {
    id?: string
    widgetId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetCreateOrConnectWithoutDashboardInput = {
    where: DashboardWidgetWhereUniqueInput
    create: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardWidgetCreateManyDashboardInputEnvelope = {
    data: DashboardWidgetCreateManyDashboardInput | DashboardWidgetCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDashboardsInput = {
    update: XOR<UserUpdateWithoutDashboardsInput, UserUncheckedUpdateWithoutDashboardsInput>
    create: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardsInput, UserUncheckedUpdateWithoutDashboardsInput>
  }

  export type UserUpdateWithoutDashboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: WidgetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: WidgetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DashboardWidgetUpsertWithWhereUniqueWithoutDashboardInput = {
    where: DashboardWidgetWhereUniqueInput
    update: XOR<DashboardWidgetUpdateWithoutDashboardInput, DashboardWidgetUncheckedUpdateWithoutDashboardInput>
    create: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardWidgetUpdateWithWhereUniqueWithoutDashboardInput = {
    where: DashboardWidgetWhereUniqueInput
    data: XOR<DashboardWidgetUpdateWithoutDashboardInput, DashboardWidgetUncheckedUpdateWithoutDashboardInput>
  }

  export type DashboardWidgetUpdateManyWithWhereWithoutDashboardInput = {
    where: DashboardWidgetScalarWhereInput
    data: XOR<DashboardWidgetUpdateManyMutationInput, DashboardWidgetUncheckedUpdateManyWithoutDashboardInput>
  }

  export type DashboardCreateWithoutDashboardWidgetsInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
  }

  export type DashboardUncheckedCreateWithoutDashboardWidgetsInput = {
    id?: string
    name: string
    userId: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardCreateOrConnectWithoutDashboardWidgetsInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutDashboardWidgetsInput, DashboardUncheckedCreateWithoutDashboardWidgetsInput>
  }

  export type WidgetCreateWithoutDashboardWidgetsInput = {
    id?: string
    name: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutWidgetsInput
    widgetTemplate?: WidgetTemplatesCreateNestedOneWithoutWidgetsInput
  }

  export type WidgetUncheckedCreateWithoutDashboardWidgetsInput = {
    id?: string
    name: string
    userId: string
    config: string
    layout: string
    templateId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WidgetCreateOrConnectWithoutDashboardWidgetsInput = {
    where: WidgetWhereUniqueInput
    create: XOR<WidgetCreateWithoutDashboardWidgetsInput, WidgetUncheckedCreateWithoutDashboardWidgetsInput>
  }

  export type DashboardUpsertWithoutDashboardWidgetsInput = {
    update: XOR<DashboardUpdateWithoutDashboardWidgetsInput, DashboardUncheckedUpdateWithoutDashboardWidgetsInput>
    create: XOR<DashboardCreateWithoutDashboardWidgetsInput, DashboardUncheckedCreateWithoutDashboardWidgetsInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutDashboardWidgetsInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutDashboardWidgetsInput, DashboardUncheckedUpdateWithoutDashboardWidgetsInput>
  }

  export type DashboardUpdateWithoutDashboardWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
  }

  export type DashboardUncheckedUpdateWithoutDashboardWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetUpsertWithoutDashboardWidgetsInput = {
    update: XOR<WidgetUpdateWithoutDashboardWidgetsInput, WidgetUncheckedUpdateWithoutDashboardWidgetsInput>
    create: XOR<WidgetCreateWithoutDashboardWidgetsInput, WidgetUncheckedCreateWithoutDashboardWidgetsInput>
    where?: WidgetWhereInput
  }

  export type WidgetUpdateToOneWithWhereWithoutDashboardWidgetsInput = {
    where?: WidgetWhereInput
    data: XOR<WidgetUpdateWithoutDashboardWidgetsInput, WidgetUncheckedUpdateWithoutDashboardWidgetsInput>
  }

  export type WidgetUpdateWithoutDashboardWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWidgetsNestedInput
    widgetTemplate?: WidgetTemplatesUpdateOneWithoutWidgetsNestedInput
  }

  export type WidgetUncheckedUpdateWithoutDashboardWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardCreateManyUserInput = {
    id?: string
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WidgetCreateManyUserInput = {
    id?: string
    name: string
    config: string
    layout: string
    templateId?: string | null
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUpdateManyWithoutWidgetNestedInput
    widgetTemplate?: WidgetTemplatesUpdateOneWithoutWidgetsNestedInput
  }

  export type WidgetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUncheckedUpdateManyWithoutWidgetNestedInput
  }

  export type WidgetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateManyWidgetInput = {
    id?: string
    dashboardId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetUpdateWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard?: DashboardUpdateOneRequiredWithoutDashboardWidgetsNestedInput
  }

  export type DashboardWidgetUncheckedUpdateWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateManyWithoutWidgetInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WidgetCreateManyWidgetTemplateInput = {
    id?: string
    name: string
    userId: string
    config: string
    layout: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type WidgetUpdateWithoutWidgetTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWidgetsNestedInput
    dashboardWidgets?: DashboardWidgetUpdateManyWithoutWidgetNestedInput
  }

  export type WidgetUncheckedUpdateWithoutWidgetTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboardWidgets?: DashboardWidgetUncheckedUpdateManyWithoutWidgetNestedInput
  }

  export type WidgetUncheckedUpdateManyWithoutWidgetTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    layout?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateManyDashboardInput = {
    id?: string
    widgetId: string
    x: number
    y: number
    w: number
    h: number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type DashboardWidgetUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widget?: WidgetUpdateOneRequiredWithoutDashboardWidgetsNestedInput
  }

  export type DashboardWidgetUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    widgetId?: StringFieldUpdateOperationsInput | string
    x?: IntFieldUpdateOperationsInput | number
    y?: IntFieldUpdateOperationsInput | number
    w?: IntFieldUpdateOperationsInput | number
    h?: IntFieldUpdateOperationsInput | number
    instanceConfig?: NullableJsonNullValueInput | InputJsonValue
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}