
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
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model employee_benefits
 * 
 */
export type employee_benefits = $Result.DefaultSelection<Prisma.$employee_benefitsPayload>
/**
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model inventory
 * 
 */
export type inventory = $Result.DefaultSelection<Prisma.$inventoryPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model sales
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type sales = $Result.DefaultSelection<Prisma.$salesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customers.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customers.findMany()
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
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee_benefits`: Exposes CRUD operations for the **employee_benefits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employee_benefits
    * const employee_benefits = await prisma.employee_benefits.findMany()
    * ```
    */
  get employee_benefits(): Prisma.employee_benefitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.inventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sales`: Exposes CRUD operations for the **sales** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sales.findMany()
    * ```
    */
  get sales(): Prisma.salesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
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
    customers: 'customers',
    employee_benefits: 'employee_benefits',
    employees: 'employees',
    inventory: 'inventory',
    orders: 'orders',
    sales: 'sales'
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
      modelProps: "customers" | "employee_benefits" | "employees" | "inventory" | "orders" | "sales"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      employee_benefits: {
        payload: Prisma.$employee_benefitsPayload<ExtArgs>
        fields: Prisma.employee_benefitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employee_benefitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employee_benefitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          findFirst: {
            args: Prisma.employee_benefitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employee_benefitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          findMany: {
            args: Prisma.employee_benefitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>[]
          }
          create: {
            args: Prisma.employee_benefitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          createMany: {
            args: Prisma.employee_benefitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employee_benefitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>[]
          }
          delete: {
            args: Prisma.employee_benefitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          update: {
            args: Prisma.employee_benefitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          deleteMany: {
            args: Prisma.employee_benefitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employee_benefitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employee_benefitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>[]
          }
          upsert: {
            args: Prisma.employee_benefitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_benefitsPayload>
          }
          aggregate: {
            args: Prisma.Employee_benefitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee_benefits>
          }
          groupBy: {
            args: Prisma.employee_benefitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Employee_benefitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.employee_benefitsCountArgs<ExtArgs>
            result: $Utils.Optional<Employee_benefitsCountAggregateOutputType> | number
          }
        }
      }
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      inventory: {
        payload: Prisma.$inventoryPayload<ExtArgs>
        fields: Prisma.inventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findFirst: {
            args: Prisma.inventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          findMany: {
            args: Prisma.inventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          create: {
            args: Prisma.inventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          createMany: {
            args: Prisma.inventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          delete: {
            args: Prisma.inventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          update: {
            args: Prisma.inventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          deleteMany: {
            args: Prisma.inventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>[]
          }
          upsert: {
            args: Prisma.inventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.inventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.inventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      sales: {
        payload: Prisma.$salesPayload<ExtArgs>
        fields: Prisma.salesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.salesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.salesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findFirst: {
            args: Prisma.salesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.salesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          findMany: {
            args: Prisma.salesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          create: {
            args: Prisma.salesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          createMany: {
            args: Prisma.salesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.salesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          delete: {
            args: Prisma.salesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          update: {
            args: Prisma.salesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          deleteMany: {
            args: Prisma.salesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.salesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.salesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>[]
          }
          upsert: {
            args: Prisma.salesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$salesPayload>
          }
          aggregate: {
            args: Prisma.SalesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSales>
          }
          groupBy: {
            args: Prisma.salesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesGroupByOutputType>[]
          }
          count: {
            args: Prisma.salesCountArgs<ExtArgs>
            result: $Utils.Optional<SalesCountAggregateOutputType> | number
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
    customers?: customersOmit
    employee_benefits?: employee_benefitsOmit
    employees?: employeesOmit
    inventory?: inventoryOmit
    orders?: ordersOmit
    sales?: salesOmit
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
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    employee_benefits: number
    sales: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee_benefits?: boolean | EmployeesCountOutputTypeCountEmployee_benefitsArgs
    sales?: boolean | EmployeesCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountEmployee_benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employee_benefitsWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    sales: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | InventoryCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    sales: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | OrdersCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customer_id: number | null
    total_spent: Decimal | null
    loyalty_points: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customer_id: number | null
    total_spent: Decimal | null
    loyalty_points: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    registration_date: Date | null
    total_spent: Decimal | null
    loyalty_points: number | null
    segment: string | null
    last_purchase_date: Date | null
  }

  export type CustomersMaxAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    registration_date: Date | null
    total_spent: Decimal | null
    loyalty_points: number | null
    segment: string | null
    last_purchase_date: Date | null
  }

  export type CustomersCountAggregateOutputType = {
    customer_id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    registration_date: number
    total_spent: number
    loyalty_points: number
    segment: number
    last_purchase_date: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customer_id?: true
    total_spent?: true
    loyalty_points?: true
  }

  export type CustomersSumAggregateInputType = {
    customer_id?: true
    total_spent?: true
    loyalty_points?: true
  }

  export type CustomersMinAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    registration_date?: true
    total_spent?: true
    loyalty_points?: true
    segment?: true
    last_purchase_date?: true
  }

  export type CustomersMaxAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    registration_date?: true
    total_spent?: true
    loyalty_points?: true
    segment?: true
    last_purchase_date?: true
  }

  export type CustomersCountAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    registration_date?: true
    total_spent?: true
    loyalty_points?: true
    segment?: true
    last_purchase_date?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customer_id: number
    first_name: string
    last_name: string
    email: string
    phone: string | null
    registration_date: Date
    total_spent: Decimal | null
    loyalty_points: number | null
    segment: string | null
    last_purchase_date: Date | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    registration_date?: boolean
    total_spent?: boolean
    loyalty_points?: boolean
    segment?: boolean
    last_purchase_date?: boolean
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    registration_date?: boolean
    total_spent?: boolean
    loyalty_points?: boolean
    segment?: boolean
    last_purchase_date?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    registration_date?: boolean
    total_spent?: boolean
    loyalty_points?: boolean
    segment?: boolean
    last_purchase_date?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    registration_date?: boolean
    total_spent?: boolean
    loyalty_points?: boolean
    segment?: boolean
    last_purchase_date?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "first_name" | "last_name" | "email" | "phone" | "registration_date" | "total_spent" | "loyalty_points" | "segment" | "last_purchase_date", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      first_name: string
      last_name: string
      email: string
      phone: string | null
      registration_date: Date
      total_spent: Prisma.Decimal | null
      loyalty_points: number | null
      segment: string | null
      last_purchase_date: Date | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customers model
   */ 
  interface customersFieldRefs {
    readonly customer_id: FieldRef<"customers", 'Int'>
    readonly first_name: FieldRef<"customers", 'String'>
    readonly last_name: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly registration_date: FieldRef<"customers", 'DateTime'>
    readonly total_spent: FieldRef<"customers", 'Decimal'>
    readonly loyalty_points: FieldRef<"customers", 'Int'>
    readonly segment: FieldRef<"customers", 'String'>
    readonly last_purchase_date: FieldRef<"customers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.orders
   */
  export type customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model employee_benefits
   */

  export type AggregateEmployee_benefits = {
    _count: Employee_benefitsCountAggregateOutputType | null
    _avg: Employee_benefitsAvgAggregateOutputType | null
    _sum: Employee_benefitsSumAggregateOutputType | null
    _min: Employee_benefitsMinAggregateOutputType | null
    _max: Employee_benefitsMaxAggregateOutputType | null
  }

  export type Employee_benefitsAvgAggregateOutputType = {
    benefit_id: number | null
    employee_id: number | null
    health_insurance_cost: Decimal | null
    retirement_contribution_pct: Decimal | null
    paid_time_off_days: number | null
    sick_leave_days: number | null
    tuition_reimbursement: Decimal | null
    life_insurance_coverage: Decimal | null
    wellness_stipend: Decimal | null
  }

  export type Employee_benefitsSumAggregateOutputType = {
    benefit_id: number | null
    employee_id: number | null
    health_insurance_cost: Decimal | null
    retirement_contribution_pct: Decimal | null
    paid_time_off_days: number | null
    sick_leave_days: number | null
    tuition_reimbursement: Decimal | null
    life_insurance_coverage: Decimal | null
    wellness_stipend: Decimal | null
  }

  export type Employee_benefitsMinAggregateOutputType = {
    benefit_id: number | null
    employee_id: number | null
    health_insurance_plan: string | null
    health_insurance_cost: Decimal | null
    retirement_contribution_pct: Decimal | null
    paid_time_off_days: number | null
    sick_leave_days: number | null
    tuition_reimbursement: Decimal | null
    life_insurance_coverage: Decimal | null
    dental_coverage: boolean | null
    vision_coverage: boolean | null
    wellness_stipend: Decimal | null
  }

  export type Employee_benefitsMaxAggregateOutputType = {
    benefit_id: number | null
    employee_id: number | null
    health_insurance_plan: string | null
    health_insurance_cost: Decimal | null
    retirement_contribution_pct: Decimal | null
    paid_time_off_days: number | null
    sick_leave_days: number | null
    tuition_reimbursement: Decimal | null
    life_insurance_coverage: Decimal | null
    dental_coverage: boolean | null
    vision_coverage: boolean | null
    wellness_stipend: Decimal | null
  }

  export type Employee_benefitsCountAggregateOutputType = {
    benefit_id: number
    employee_id: number
    health_insurance_plan: number
    health_insurance_cost: number
    retirement_contribution_pct: number
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement: number
    life_insurance_coverage: number
    dental_coverage: number
    vision_coverage: number
    wellness_stipend: number
    _all: number
  }


  export type Employee_benefitsAvgAggregateInputType = {
    benefit_id?: true
    employee_id?: true
    health_insurance_cost?: true
    retirement_contribution_pct?: true
    paid_time_off_days?: true
    sick_leave_days?: true
    tuition_reimbursement?: true
    life_insurance_coverage?: true
    wellness_stipend?: true
  }

  export type Employee_benefitsSumAggregateInputType = {
    benefit_id?: true
    employee_id?: true
    health_insurance_cost?: true
    retirement_contribution_pct?: true
    paid_time_off_days?: true
    sick_leave_days?: true
    tuition_reimbursement?: true
    life_insurance_coverage?: true
    wellness_stipend?: true
  }

  export type Employee_benefitsMinAggregateInputType = {
    benefit_id?: true
    employee_id?: true
    health_insurance_plan?: true
    health_insurance_cost?: true
    retirement_contribution_pct?: true
    paid_time_off_days?: true
    sick_leave_days?: true
    tuition_reimbursement?: true
    life_insurance_coverage?: true
    dental_coverage?: true
    vision_coverage?: true
    wellness_stipend?: true
  }

  export type Employee_benefitsMaxAggregateInputType = {
    benefit_id?: true
    employee_id?: true
    health_insurance_plan?: true
    health_insurance_cost?: true
    retirement_contribution_pct?: true
    paid_time_off_days?: true
    sick_leave_days?: true
    tuition_reimbursement?: true
    life_insurance_coverage?: true
    dental_coverage?: true
    vision_coverage?: true
    wellness_stipend?: true
  }

  export type Employee_benefitsCountAggregateInputType = {
    benefit_id?: true
    employee_id?: true
    health_insurance_plan?: true
    health_insurance_cost?: true
    retirement_contribution_pct?: true
    paid_time_off_days?: true
    sick_leave_days?: true
    tuition_reimbursement?: true
    life_insurance_coverage?: true
    dental_coverage?: true
    vision_coverage?: true
    wellness_stipend?: true
    _all?: true
  }

  export type Employee_benefitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_benefits to aggregate.
     */
    where?: employee_benefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_benefits to fetch.
     */
    orderBy?: employee_benefitsOrderByWithRelationInput | employee_benefitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employee_benefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employee_benefits
    **/
    _count?: true | Employee_benefitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Employee_benefitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Employee_benefitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Employee_benefitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Employee_benefitsMaxAggregateInputType
  }

  export type GetEmployee_benefitsAggregateType<T extends Employee_benefitsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee_benefits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee_benefits[P]>
      : GetScalarType<T[P], AggregateEmployee_benefits[P]>
  }




  export type employee_benefitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employee_benefitsWhereInput
    orderBy?: employee_benefitsOrderByWithAggregationInput | employee_benefitsOrderByWithAggregationInput[]
    by: Employee_benefitsScalarFieldEnum[] | Employee_benefitsScalarFieldEnum
    having?: employee_benefitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Employee_benefitsCountAggregateInputType | true
    _avg?: Employee_benefitsAvgAggregateInputType
    _sum?: Employee_benefitsSumAggregateInputType
    _min?: Employee_benefitsMinAggregateInputType
    _max?: Employee_benefitsMaxAggregateInputType
  }

  export type Employee_benefitsGroupByOutputType = {
    benefit_id: number
    employee_id: number | null
    health_insurance_plan: string
    health_insurance_cost: Decimal
    retirement_contribution_pct: Decimal
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement: Decimal | null
    life_insurance_coverage: Decimal
    dental_coverage: boolean | null
    vision_coverage: boolean | null
    wellness_stipend: Decimal | null
    _count: Employee_benefitsCountAggregateOutputType | null
    _avg: Employee_benefitsAvgAggregateOutputType | null
    _sum: Employee_benefitsSumAggregateOutputType | null
    _min: Employee_benefitsMinAggregateOutputType | null
    _max: Employee_benefitsMaxAggregateOutputType | null
  }

  type GetEmployee_benefitsGroupByPayload<T extends employee_benefitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employee_benefitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Employee_benefitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Employee_benefitsGroupByOutputType[P]>
            : GetScalarType<T[P], Employee_benefitsGroupByOutputType[P]>
        }
      >
    >


  export type employee_benefitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    benefit_id?: boolean
    employee_id?: boolean
    health_insurance_plan?: boolean
    health_insurance_cost?: boolean
    retirement_contribution_pct?: boolean
    paid_time_off_days?: boolean
    sick_leave_days?: boolean
    tuition_reimbursement?: boolean
    life_insurance_coverage?: boolean
    dental_coverage?: boolean
    vision_coverage?: boolean
    wellness_stipend?: boolean
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }, ExtArgs["result"]["employee_benefits"]>

  export type employee_benefitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    benefit_id?: boolean
    employee_id?: boolean
    health_insurance_plan?: boolean
    health_insurance_cost?: boolean
    retirement_contribution_pct?: boolean
    paid_time_off_days?: boolean
    sick_leave_days?: boolean
    tuition_reimbursement?: boolean
    life_insurance_coverage?: boolean
    dental_coverage?: boolean
    vision_coverage?: boolean
    wellness_stipend?: boolean
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }, ExtArgs["result"]["employee_benefits"]>

  export type employee_benefitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    benefit_id?: boolean
    employee_id?: boolean
    health_insurance_plan?: boolean
    health_insurance_cost?: boolean
    retirement_contribution_pct?: boolean
    paid_time_off_days?: boolean
    sick_leave_days?: boolean
    tuition_reimbursement?: boolean
    life_insurance_coverage?: boolean
    dental_coverage?: boolean
    vision_coverage?: boolean
    wellness_stipend?: boolean
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }, ExtArgs["result"]["employee_benefits"]>

  export type employee_benefitsSelectScalar = {
    benefit_id?: boolean
    employee_id?: boolean
    health_insurance_plan?: boolean
    health_insurance_cost?: boolean
    retirement_contribution_pct?: boolean
    paid_time_off_days?: boolean
    sick_leave_days?: boolean
    tuition_reimbursement?: boolean
    life_insurance_coverage?: boolean
    dental_coverage?: boolean
    vision_coverage?: boolean
    wellness_stipend?: boolean
  }

  export type employee_benefitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"benefit_id" | "employee_id" | "health_insurance_plan" | "health_insurance_cost" | "retirement_contribution_pct" | "paid_time_off_days" | "sick_leave_days" | "tuition_reimbursement" | "life_insurance_coverage" | "dental_coverage" | "vision_coverage" | "wellness_stipend", ExtArgs["result"]["employee_benefits"]>
  export type employee_benefitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }
  export type employee_benefitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }
  export type employee_benefitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | employee_benefits$employeesArgs<ExtArgs>
  }

  export type $employee_benefitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee_benefits"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      benefit_id: number
      employee_id: number | null
      health_insurance_plan: string
      health_insurance_cost: Prisma.Decimal
      retirement_contribution_pct: Prisma.Decimal
      paid_time_off_days: number
      sick_leave_days: number
      tuition_reimbursement: Prisma.Decimal | null
      life_insurance_coverage: Prisma.Decimal
      dental_coverage: boolean | null
      vision_coverage: boolean | null
      wellness_stipend: Prisma.Decimal | null
    }, ExtArgs["result"]["employee_benefits"]>
    composites: {}
  }

  type employee_benefitsGetPayload<S extends boolean | null | undefined | employee_benefitsDefaultArgs> = $Result.GetResult<Prisma.$employee_benefitsPayload, S>

  type employee_benefitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employee_benefitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Employee_benefitsCountAggregateInputType | true
    }

  export interface employee_benefitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee_benefits'], meta: { name: 'employee_benefits' } }
    /**
     * Find zero or one Employee_benefits that matches the filter.
     * @param {employee_benefitsFindUniqueArgs} args - Arguments to find a Employee_benefits
     * @example
     * // Get one Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employee_benefitsFindUniqueArgs>(args: SelectSubset<T, employee_benefitsFindUniqueArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee_benefits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employee_benefitsFindUniqueOrThrowArgs} args - Arguments to find a Employee_benefits
     * @example
     * // Get one Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employee_benefitsFindUniqueOrThrowArgs>(args: SelectSubset<T, employee_benefitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsFindFirstArgs} args - Arguments to find a Employee_benefits
     * @example
     * // Get one Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employee_benefitsFindFirstArgs>(args?: SelectSubset<T, employee_benefitsFindFirstArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_benefits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsFindFirstOrThrowArgs} args - Arguments to find a Employee_benefits
     * @example
     * // Get one Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employee_benefitsFindFirstOrThrowArgs>(args?: SelectSubset<T, employee_benefitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employee_benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findMany()
     * 
     * // Get first 10 Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.findMany({ take: 10 })
     * 
     * // Only select the `benefit_id`
     * const employee_benefitsWithBenefit_idOnly = await prisma.employee_benefits.findMany({ select: { benefit_id: true } })
     * 
     */
    findMany<T extends employee_benefitsFindManyArgs>(args?: SelectSubset<T, employee_benefitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee_benefits.
     * @param {employee_benefitsCreateArgs} args - Arguments to create a Employee_benefits.
     * @example
     * // Create one Employee_benefits
     * const Employee_benefits = await prisma.employee_benefits.create({
     *   data: {
     *     // ... data to create a Employee_benefits
     *   }
     * })
     * 
     */
    create<T extends employee_benefitsCreateArgs>(args: SelectSubset<T, employee_benefitsCreateArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employee_benefits.
     * @param {employee_benefitsCreateManyArgs} args - Arguments to create many Employee_benefits.
     * @example
     * // Create many Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employee_benefitsCreateManyArgs>(args?: SelectSubset<T, employee_benefitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employee_benefits and returns the data saved in the database.
     * @param {employee_benefitsCreateManyAndReturnArgs} args - Arguments to create many Employee_benefits.
     * @example
     * // Create many Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employee_benefits and only return the `benefit_id`
     * const employee_benefitsWithBenefit_idOnly = await prisma.employee_benefits.createManyAndReturn({
     *   select: { benefit_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employee_benefitsCreateManyAndReturnArgs>(args?: SelectSubset<T, employee_benefitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee_benefits.
     * @param {employee_benefitsDeleteArgs} args - Arguments to delete one Employee_benefits.
     * @example
     * // Delete one Employee_benefits
     * const Employee_benefits = await prisma.employee_benefits.delete({
     *   where: {
     *     // ... filter to delete one Employee_benefits
     *   }
     * })
     * 
     */
    delete<T extends employee_benefitsDeleteArgs>(args: SelectSubset<T, employee_benefitsDeleteArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee_benefits.
     * @param {employee_benefitsUpdateArgs} args - Arguments to update one Employee_benefits.
     * @example
     * // Update one Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employee_benefitsUpdateArgs>(args: SelectSubset<T, employee_benefitsUpdateArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employee_benefits.
     * @param {employee_benefitsDeleteManyArgs} args - Arguments to filter Employee_benefits to delete.
     * @example
     * // Delete a few Employee_benefits
     * const { count } = await prisma.employee_benefits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employee_benefitsDeleteManyArgs>(args?: SelectSubset<T, employee_benefitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employee_benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employee_benefitsUpdateManyArgs>(args: SelectSubset<T, employee_benefitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employee_benefits and returns the data updated in the database.
     * @param {employee_benefitsUpdateManyAndReturnArgs} args - Arguments to update many Employee_benefits.
     * @example
     * // Update many Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employee_benefits and only return the `benefit_id`
     * const employee_benefitsWithBenefit_idOnly = await prisma.employee_benefits.updateManyAndReturn({
     *   select: { benefit_id: true },
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
    updateManyAndReturn<T extends employee_benefitsUpdateManyAndReturnArgs>(args: SelectSubset<T, employee_benefitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee_benefits.
     * @param {employee_benefitsUpsertArgs} args - Arguments to update or create a Employee_benefits.
     * @example
     * // Update or create a Employee_benefits
     * const employee_benefits = await prisma.employee_benefits.upsert({
     *   create: {
     *     // ... data to create a Employee_benefits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee_benefits we want to update
     *   }
     * })
     */
    upsert<T extends employee_benefitsUpsertArgs>(args: SelectSubset<T, employee_benefitsUpsertArgs<ExtArgs>>): Prisma__employee_benefitsClient<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employee_benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsCountArgs} args - Arguments to filter Employee_benefits to count.
     * @example
     * // Count the number of Employee_benefits
     * const count = await prisma.employee_benefits.count({
     *   where: {
     *     // ... the filter for the Employee_benefits we want to count
     *   }
     * })
    **/
    count<T extends employee_benefitsCountArgs>(
      args?: Subset<T, employee_benefitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employee_benefitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee_benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_benefitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Employee_benefitsAggregateArgs>(args: Subset<T, Employee_benefitsAggregateArgs>): Prisma.PrismaPromise<GetEmployee_benefitsAggregateType<T>>

    /**
     * Group by Employee_benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_benefitsGroupByArgs} args - Group by arguments.
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
      T extends employee_benefitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employee_benefitsGroupByArgs['orderBy'] }
        : { orderBy?: employee_benefitsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employee_benefitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployee_benefitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee_benefits model
   */
  readonly fields: employee_benefitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee_benefits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employee_benefitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends employee_benefits$employeesArgs<ExtArgs> = {}>(args?: Subset<T, employee_benefits$employeesArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the employee_benefits model
   */ 
  interface employee_benefitsFieldRefs {
    readonly benefit_id: FieldRef<"employee_benefits", 'Int'>
    readonly employee_id: FieldRef<"employee_benefits", 'Int'>
    readonly health_insurance_plan: FieldRef<"employee_benefits", 'String'>
    readonly health_insurance_cost: FieldRef<"employee_benefits", 'Decimal'>
    readonly retirement_contribution_pct: FieldRef<"employee_benefits", 'Decimal'>
    readonly paid_time_off_days: FieldRef<"employee_benefits", 'Int'>
    readonly sick_leave_days: FieldRef<"employee_benefits", 'Int'>
    readonly tuition_reimbursement: FieldRef<"employee_benefits", 'Decimal'>
    readonly life_insurance_coverage: FieldRef<"employee_benefits", 'Decimal'>
    readonly dental_coverage: FieldRef<"employee_benefits", 'Boolean'>
    readonly vision_coverage: FieldRef<"employee_benefits", 'Boolean'>
    readonly wellness_stipend: FieldRef<"employee_benefits", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * employee_benefits findUnique
   */
  export type employee_benefitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter, which employee_benefits to fetch.
     */
    where: employee_benefitsWhereUniqueInput
  }

  /**
   * employee_benefits findUniqueOrThrow
   */
  export type employee_benefitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter, which employee_benefits to fetch.
     */
    where: employee_benefitsWhereUniqueInput
  }

  /**
   * employee_benefits findFirst
   */
  export type employee_benefitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter, which employee_benefits to fetch.
     */
    where?: employee_benefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_benefits to fetch.
     */
    orderBy?: employee_benefitsOrderByWithRelationInput | employee_benefitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employee_benefits.
     */
    cursor?: employee_benefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employee_benefits.
     */
    distinct?: Employee_benefitsScalarFieldEnum | Employee_benefitsScalarFieldEnum[]
  }

  /**
   * employee_benefits findFirstOrThrow
   */
  export type employee_benefitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter, which employee_benefits to fetch.
     */
    where?: employee_benefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_benefits to fetch.
     */
    orderBy?: employee_benefitsOrderByWithRelationInput | employee_benefitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employee_benefits.
     */
    cursor?: employee_benefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employee_benefits.
     */
    distinct?: Employee_benefitsScalarFieldEnum | Employee_benefitsScalarFieldEnum[]
  }

  /**
   * employee_benefits findMany
   */
  export type employee_benefitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter, which employee_benefits to fetch.
     */
    where?: employee_benefitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_benefits to fetch.
     */
    orderBy?: employee_benefitsOrderByWithRelationInput | employee_benefitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employee_benefits.
     */
    cursor?: employee_benefitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_benefits.
     */
    skip?: number
    distinct?: Employee_benefitsScalarFieldEnum | Employee_benefitsScalarFieldEnum[]
  }

  /**
   * employee_benefits create
   */
  export type employee_benefitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * The data needed to create a employee_benefits.
     */
    data: XOR<employee_benefitsCreateInput, employee_benefitsUncheckedCreateInput>
  }

  /**
   * employee_benefits createMany
   */
  export type employee_benefitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employee_benefits.
     */
    data: employee_benefitsCreateManyInput | employee_benefitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee_benefits createManyAndReturn
   */
  export type employee_benefitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * The data used to create many employee_benefits.
     */
    data: employee_benefitsCreateManyInput | employee_benefitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee_benefits update
   */
  export type employee_benefitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * The data needed to update a employee_benefits.
     */
    data: XOR<employee_benefitsUpdateInput, employee_benefitsUncheckedUpdateInput>
    /**
     * Choose, which employee_benefits to update.
     */
    where: employee_benefitsWhereUniqueInput
  }

  /**
   * employee_benefits updateMany
   */
  export type employee_benefitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employee_benefits.
     */
    data: XOR<employee_benefitsUpdateManyMutationInput, employee_benefitsUncheckedUpdateManyInput>
    /**
     * Filter which employee_benefits to update
     */
    where?: employee_benefitsWhereInput
    /**
     * Limit how many employee_benefits to update.
     */
    limit?: number
  }

  /**
   * employee_benefits updateManyAndReturn
   */
  export type employee_benefitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * The data used to update employee_benefits.
     */
    data: XOR<employee_benefitsUpdateManyMutationInput, employee_benefitsUncheckedUpdateManyInput>
    /**
     * Filter which employee_benefits to update
     */
    where?: employee_benefitsWhereInput
    /**
     * Limit how many employee_benefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * employee_benefits upsert
   */
  export type employee_benefitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * The filter to search for the employee_benefits to update in case it exists.
     */
    where: employee_benefitsWhereUniqueInput
    /**
     * In case the employee_benefits found by the `where` argument doesn't exist, create a new employee_benefits with this data.
     */
    create: XOR<employee_benefitsCreateInput, employee_benefitsUncheckedCreateInput>
    /**
     * In case the employee_benefits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employee_benefitsUpdateInput, employee_benefitsUncheckedUpdateInput>
  }

  /**
   * employee_benefits delete
   */
  export type employee_benefitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    /**
     * Filter which employee_benefits to delete.
     */
    where: employee_benefitsWhereUniqueInput
  }

  /**
   * employee_benefits deleteMany
   */
  export type employee_benefitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_benefits to delete
     */
    where?: employee_benefitsWhereInput
    /**
     * Limit how many employee_benefits to delete.
     */
    limit?: number
  }

  /**
   * employee_benefits.employees
   */
  export type employee_benefits$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
  }

  /**
   * employee_benefits without action
   */
  export type employee_benefitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
  }


  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    employee_id: number | null
    salary: Decimal | null
    commission_pct: Decimal | null
    manager_id: number | null
    performance_score: Decimal | null
  }

  export type EmployeesSumAggregateOutputType = {
    employee_id: number | null
    salary: Decimal | null
    commission_pct: Decimal | null
    manager_id: number | null
    performance_score: Decimal | null
  }

  export type EmployeesMinAggregateOutputType = {
    employee_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    department: string | null
    position: string | null
    hire_date: Date | null
    salary: Decimal | null
    commission_pct: Decimal | null
    manager_id: number | null
    performance_score: Decimal | null
  }

  export type EmployeesMaxAggregateOutputType = {
    employee_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    department: string | null
    position: string | null
    hire_date: Date | null
    salary: Decimal | null
    commission_pct: Decimal | null
    manager_id: number | null
    performance_score: Decimal | null
  }

  export type EmployeesCountAggregateOutputType = {
    employee_id: number
    first_name: number
    last_name: number
    email: number
    department: number
    position: number
    hire_date: number
    salary: number
    commission_pct: number
    manager_id: number
    performance_score: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    employee_id?: true
    salary?: true
    commission_pct?: true
    manager_id?: true
    performance_score?: true
  }

  export type EmployeesSumAggregateInputType = {
    employee_id?: true
    salary?: true
    commission_pct?: true
    manager_id?: true
    performance_score?: true
  }

  export type EmployeesMinAggregateInputType = {
    employee_id?: true
    first_name?: true
    last_name?: true
    email?: true
    department?: true
    position?: true
    hire_date?: true
    salary?: true
    commission_pct?: true
    manager_id?: true
    performance_score?: true
  }

  export type EmployeesMaxAggregateInputType = {
    employee_id?: true
    first_name?: true
    last_name?: true
    email?: true
    department?: true
    position?: true
    hire_date?: true
    salary?: true
    commission_pct?: true
    manager_id?: true
    performance_score?: true
  }

  export type EmployeesCountAggregateInputType = {
    employee_id?: true
    first_name?: true
    last_name?: true
    email?: true
    department?: true
    position?: true
    hire_date?: true
    salary?: true
    commission_pct?: true
    manager_id?: true
    performance_score?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    employee_id: number
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date
    salary: Decimal
    commission_pct: Decimal | null
    manager_id: number | null
    performance_score: Decimal | null
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    department?: boolean
    position?: boolean
    hire_date?: boolean
    salary?: boolean
    commission_pct?: boolean
    manager_id?: boolean
    performance_score?: boolean
    employee_benefits?: boolean | employees$employee_benefitsArgs<ExtArgs>
    sales?: boolean | employees$salesArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    department?: boolean
    position?: boolean
    hire_date?: boolean
    salary?: boolean
    commission_pct?: boolean
    manager_id?: boolean
    performance_score?: boolean
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employee_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    department?: boolean
    position?: boolean
    hire_date?: boolean
    salary?: boolean
    commission_pct?: boolean
    manager_id?: boolean
    performance_score?: boolean
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectScalar = {
    employee_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    department?: boolean
    position?: boolean
    hire_date?: boolean
    salary?: boolean
    commission_pct?: boolean
    manager_id?: boolean
    performance_score?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employee_id" | "first_name" | "last_name" | "email" | "department" | "position" | "hire_date" | "salary" | "commission_pct" | "manager_id" | "performance_score", ExtArgs["result"]["employees"]>
  export type employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee_benefits?: boolean | employees$employee_benefitsArgs<ExtArgs>
    sales?: boolean | employees$salesArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type employeesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type employeesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {
      employee_benefits: Prisma.$employee_benefitsPayload<ExtArgs>[]
      sales: Prisma.$salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employee_id: number
      first_name: string
      last_name: string
      email: string
      department: string
      position: string
      hire_date: Date
      salary: Prisma.Decimal
      commission_pct: Prisma.Decimal | null
      manager_id: number | null
      performance_score: Prisma.Decimal | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.findMany({ select: { employee_id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.createManyAndReturn({
     *   select: { employee_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `employee_id`
     * const employeesWithEmployee_idOnly = await prisma.employees.updateManyAndReturn({
     *   select: { employee_id: true },
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
    updateManyAndReturn<T extends employeesUpdateManyAndReturnArgs>(args: SelectSubset<T, employeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
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
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee_benefits<T extends employees$employee_benefitsArgs<ExtArgs> = {}>(args?: Subset<T, employees$employee_benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_benefitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sales<T extends employees$salesArgs<ExtArgs> = {}>(args?: Subset<T, employees$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the employees model
   */ 
  interface employeesFieldRefs {
    readonly employee_id: FieldRef<"employees", 'Int'>
    readonly first_name: FieldRef<"employees", 'String'>
    readonly last_name: FieldRef<"employees", 'String'>
    readonly email: FieldRef<"employees", 'String'>
    readonly department: FieldRef<"employees", 'String'>
    readonly position: FieldRef<"employees", 'String'>
    readonly hire_date: FieldRef<"employees", 'DateTime'>
    readonly salary: FieldRef<"employees", 'Decimal'>
    readonly commission_pct: FieldRef<"employees", 'Decimal'>
    readonly manager_id: FieldRef<"employees", 'Int'>
    readonly performance_score: FieldRef<"employees", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees createManyAndReturn
   */
  export type employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees updateManyAndReturn
   */
  export type employeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees.employee_benefits
   */
  export type employees$employee_benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_benefits
     */
    select?: employee_benefitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_benefits
     */
    omit?: employee_benefitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_benefitsInclude<ExtArgs> | null
    where?: employee_benefitsWhereInput
    orderBy?: employee_benefitsOrderByWithRelationInput | employee_benefitsOrderByWithRelationInput[]
    cursor?: employee_benefitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Employee_benefitsScalarFieldEnum | Employee_benefitsScalarFieldEnum[]
  }

  /**
   * employees.sales
   */
  export type employees$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
  }


  /**
   * Model inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    product_id: number | null
    stock_quantity: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    reorder_level: number | null
    profit_margin: Decimal | null
  }

  export type InventorySumAggregateOutputType = {
    product_id: number | null
    stock_quantity: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    reorder_level: number | null
    profit_margin: Decimal | null
  }

  export type InventoryMinAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    category: string | null
    supplier: string | null
    stock_quantity: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    reorder_level: number | null
    last_restock_date: Date | null
    profit_margin: Decimal | null
  }

  export type InventoryMaxAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    category: string | null
    supplier: string | null
    stock_quantity: number | null
    cost_price: Decimal | null
    selling_price: Decimal | null
    reorder_level: number | null
    last_restock_date: Date | null
    profit_margin: Decimal | null
  }

  export type InventoryCountAggregateOutputType = {
    product_id: number
    product_name: number
    category: number
    supplier: number
    stock_quantity: number
    cost_price: number
    selling_price: number
    reorder_level: number
    last_restock_date: number
    profit_margin: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    product_id?: true
    stock_quantity?: true
    cost_price?: true
    selling_price?: true
    reorder_level?: true
    profit_margin?: true
  }

  export type InventorySumAggregateInputType = {
    product_id?: true
    stock_quantity?: true
    cost_price?: true
    selling_price?: true
    reorder_level?: true
    profit_margin?: true
  }

  export type InventoryMinAggregateInputType = {
    product_id?: true
    product_name?: true
    category?: true
    supplier?: true
    stock_quantity?: true
    cost_price?: true
    selling_price?: true
    reorder_level?: true
    last_restock_date?: true
    profit_margin?: true
  }

  export type InventoryMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    category?: true
    supplier?: true
    stock_quantity?: true
    cost_price?: true
    selling_price?: true
    reorder_level?: true
    last_restock_date?: true
    profit_margin?: true
  }

  export type InventoryCountAggregateInputType = {
    product_id?: true
    product_name?: true
    category?: true
    supplier?: true
    stock_quantity?: true
    cost_price?: true
    selling_price?: true
    reorder_level?: true
    last_restock_date?: true
    profit_margin?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventory to aggregate.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type inventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inventoryWhereInput
    orderBy?: inventoryOrderByWithAggregationInput | inventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: inventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    product_id: number
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal
    selling_price: Decimal
    reorder_level: number
    last_restock_date: Date
    profit_margin: Decimal
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends inventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type inventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category?: boolean
    supplier?: boolean
    stock_quantity?: boolean
    cost_price?: boolean
    selling_price?: boolean
    reorder_level?: boolean
    last_restock_date?: boolean
    profit_margin?: boolean
    sales?: boolean | inventory$salesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category?: boolean
    supplier?: boolean
    stock_quantity?: boolean
    cost_price?: boolean
    selling_price?: boolean
    reorder_level?: boolean
    last_restock_date?: boolean
    profit_margin?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category?: boolean
    supplier?: boolean
    stock_quantity?: boolean
    cost_price?: boolean
    selling_price?: boolean
    reorder_level?: boolean
    last_restock_date?: boolean
    profit_margin?: boolean
  }, ExtArgs["result"]["inventory"]>

  export type inventorySelectScalar = {
    product_id?: boolean
    product_name?: boolean
    category?: boolean
    supplier?: boolean
    stock_quantity?: boolean
    cost_price?: boolean
    selling_price?: boolean
    reorder_level?: boolean
    last_restock_date?: boolean
    profit_margin?: boolean
  }

  export type inventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "category" | "supplier" | "stock_quantity" | "cost_price" | "selling_price" | "reorder_level" | "last_restock_date" | "profit_margin", ExtArgs["result"]["inventory"]>
  export type inventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | inventory$salesArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type inventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type inventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $inventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inventory"
    objects: {
      sales: Prisma.$salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_name: string
      category: string
      supplier: string
      stock_quantity: number
      cost_price: Prisma.Decimal
      selling_price: Prisma.Decimal
      reorder_level: number
      last_restock_date: Date
      profit_margin: Prisma.Decimal
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type inventoryGetPayload<S extends boolean | null | undefined | inventoryDefaultArgs> = $Result.GetResult<Prisma.$inventoryPayload, S>

  type inventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface inventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inventory'], meta: { name: 'inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {inventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inventoryFindUniqueArgs>(args: SelectSubset<T, inventoryFindUniqueArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, inventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inventoryFindFirstArgs>(args?: SelectSubset<T, inventoryFindFirstArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, inventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const inventoryWithProduct_idOnly = await prisma.inventory.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends inventoryFindManyArgs>(args?: SelectSubset<T, inventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {inventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends inventoryCreateArgs>(args: SelectSubset<T, inventoryCreateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {inventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inventoryCreateManyArgs>(args?: SelectSubset<T, inventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {inventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `product_id`
     * const inventoryWithProduct_idOnly = await prisma.inventory.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, inventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {inventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends inventoryDeleteArgs>(args: SelectSubset<T, inventoryDeleteArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {inventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inventoryUpdateArgs>(args: SelectSubset<T, inventoryUpdateArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {inventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inventoryDeleteManyArgs>(args?: SelectSubset<T, inventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inventoryUpdateManyArgs>(args: SelectSubset<T, inventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {inventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `product_id`
     * const inventoryWithProduct_idOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends inventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, inventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {inventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends inventoryUpsertArgs>(args: SelectSubset<T, inventoryUpsertArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends inventoryCountArgs>(
      args?: Subset<T, inventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inventoryGroupByArgs} args - Group by arguments.
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
      T extends inventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inventoryGroupByArgs['orderBy'] }
        : { orderBy?: inventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, inventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inventory model
   */
  readonly fields: inventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends inventory$salesArgs<ExtArgs> = {}>(args?: Subset<T, inventory$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the inventory model
   */ 
  interface inventoryFieldRefs {
    readonly product_id: FieldRef<"inventory", 'Int'>
    readonly product_name: FieldRef<"inventory", 'String'>
    readonly category: FieldRef<"inventory", 'String'>
    readonly supplier: FieldRef<"inventory", 'String'>
    readonly stock_quantity: FieldRef<"inventory", 'Int'>
    readonly cost_price: FieldRef<"inventory", 'Decimal'>
    readonly selling_price: FieldRef<"inventory", 'Decimal'>
    readonly reorder_level: FieldRef<"inventory", 'Int'>
    readonly last_restock_date: FieldRef<"inventory", 'DateTime'>
    readonly profit_margin: FieldRef<"inventory", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * inventory findUnique
   */
  export type inventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findUniqueOrThrow
   */
  export type inventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory findFirst
   */
  export type inventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findFirstOrThrow
   */
  export type inventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventory to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory findMany
   */
  export type inventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter, which inventories to fetch.
     */
    where?: inventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inventories to fetch.
     */
    orderBy?: inventoryOrderByWithRelationInput | inventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inventories.
     */
    cursor?: inventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * inventory create
   */
  export type inventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a inventory.
     */
    data: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
  }

  /**
   * inventory createMany
   */
  export type inventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory createManyAndReturn
   */
  export type inventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to create many inventories.
     */
    data: inventoryCreateManyInput | inventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inventory update
   */
  export type inventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a inventory.
     */
    data: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
    /**
     * Choose, which inventory to update.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory updateMany
   */
  export type inventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory updateManyAndReturn
   */
  export type inventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * The data used to update inventories.
     */
    data: XOR<inventoryUpdateManyMutationInput, inventoryUncheckedUpdateManyInput>
    /**
     * Filter which inventories to update
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to update.
     */
    limit?: number
  }

  /**
   * inventory upsert
   */
  export type inventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the inventory to update in case it exists.
     */
    where: inventoryWhereUniqueInput
    /**
     * In case the inventory found by the `where` argument doesn't exist, create a new inventory with this data.
     */
    create: XOR<inventoryCreateInput, inventoryUncheckedCreateInput>
    /**
     * In case the inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inventoryUpdateInput, inventoryUncheckedUpdateInput>
  }

  /**
   * inventory delete
   */
  export type inventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    /**
     * Filter which inventory to delete.
     */
    where: inventoryWhereUniqueInput
  }

  /**
   * inventory deleteMany
   */
  export type inventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inventories to delete
     */
    where?: inventoryWhereInput
    /**
     * Limit how many inventories to delete.
     */
    limit?: number
  }

  /**
   * inventory.sales
   */
  export type inventory$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * inventory without action
   */
  export type inventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    total_amount: Decimal | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_date: Date | null
    total_amount: Decimal | null
    status: string | null
    payment_method: string | null
    shipping_address: string | null
    tracking_number: string | null
    estimated_delivery: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_date: Date | null
    total_amount: Decimal | null
    status: string | null
    payment_method: string | null
    shipping_address: string | null
    tracking_number: string | null
    estimated_delivery: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    customer_id: number
    order_date: number
    total_amount: number
    status: number
    payment_method: number
    shipping_address: number
    tracking_number: number
    estimated_delivery: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    customer_id?: true
    total_amount?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    customer_id?: true
    total_amount?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
    total_amount?: true
    status?: true
    payment_method?: true
    shipping_address?: true
    tracking_number?: true
    estimated_delivery?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
    total_amount?: true
    status?: true
    payment_method?: true
    shipping_address?: true
    tracking_number?: true
    estimated_delivery?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
    total_amount?: true
    status?: true
    payment_method?: true
    shipping_address?: true
    tracking_number?: true
    estimated_delivery?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    customer_id: number | null
    order_date: Date
    total_amount: Decimal
    status: string
    payment_method: string
    shipping_address: string
    tracking_number: string | null
    estimated_delivery: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    total_amount?: boolean
    status?: boolean
    payment_method?: boolean
    shipping_address?: boolean
    tracking_number?: boolean
    estimated_delivery?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
    sales?: boolean | orders$salesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    total_amount?: boolean
    status?: boolean
    payment_method?: boolean
    shipping_address?: boolean
    tracking_number?: boolean
    estimated_delivery?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    total_amount?: boolean
    status?: boolean
    payment_method?: boolean
    shipping_address?: boolean
    tracking_number?: boolean
    estimated_delivery?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    total_amount?: boolean
    status?: boolean
    payment_method?: boolean
    shipping_address?: boolean
    tracking_number?: boolean
    estimated_delivery?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "customer_id" | "order_date" | "total_amount" | "status" | "payment_method" | "shipping_address" | "tracking_number" | "estimated_delivery", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
    sales?: boolean | orders$salesArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      customers: Prisma.$customersPayload<ExtArgs> | null
      sales: Prisma.$salesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      customer_id: number | null
      order_date: Date
      total_amount: Prisma.Decimal
      status: string
      payment_method: string
      shipping_address: string
      tracking_number: string | null
      estimated_delivery: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends orders$customersArgs<ExtArgs> = {}>(args?: Subset<T, orders$customersArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sales<T extends orders$salesArgs<ExtArgs> = {}>(args?: Subset<T, orders$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'Int'>
    readonly customer_id: FieldRef<"orders", 'Int'>
    readonly order_date: FieldRef<"orders", 'DateTime'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly status: FieldRef<"orders", 'String'>
    readonly payment_method: FieldRef<"orders", 'String'>
    readonly shipping_address: FieldRef<"orders", 'String'>
    readonly tracking_number: FieldRef<"orders", 'String'>
    readonly estimated_delivery: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.customers
   */
  export type orders$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
  }

  /**
   * orders.sales
   */
  export type orders$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    where?: salesWhereInput
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    cursor?: salesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model sales
   */

  export type AggregateSales = {
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  export type SalesAvgAggregateOutputType = {
    sale_id: number | null
    employee_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    commission_amount: Decimal | null
    profit: Decimal | null
    customer_rating: number | null
  }

  export type SalesSumAggregateOutputType = {
    sale_id: number | null
    employee_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    commission_amount: Decimal | null
    profit: Decimal | null
    customer_rating: number | null
  }

  export type SalesMinAggregateOutputType = {
    sale_id: number | null
    employee_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    sale_date: Date | null
    commission_amount: Decimal | null
    profit: Decimal | null
    customer_rating: number | null
  }

  export type SalesMaxAggregateOutputType = {
    sale_id: number | null
    employee_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
    unit_price: Decimal | null
    sale_date: Date | null
    commission_amount: Decimal | null
    profit: Decimal | null
    customer_rating: number | null
  }

  export type SalesCountAggregateOutputType = {
    sale_id: number
    employee_id: number
    order_id: number
    product_id: number
    quantity: number
    unit_price: number
    sale_date: number
    commission_amount: number
    profit: number
    customer_rating: number
    _all: number
  }


  export type SalesAvgAggregateInputType = {
    sale_id?: true
    employee_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    commission_amount?: true
    profit?: true
    customer_rating?: true
  }

  export type SalesSumAggregateInputType = {
    sale_id?: true
    employee_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    commission_amount?: true
    profit?: true
    customer_rating?: true
  }

  export type SalesMinAggregateInputType = {
    sale_id?: true
    employee_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    sale_date?: true
    commission_amount?: true
    profit?: true
    customer_rating?: true
  }

  export type SalesMaxAggregateInputType = {
    sale_id?: true
    employee_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    sale_date?: true
    commission_amount?: true
    profit?: true
    customer_rating?: true
  }

  export type SalesCountAggregateInputType = {
    sale_id?: true
    employee_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    sale_date?: true
    commission_amount?: true
    profit?: true
    customer_rating?: true
    _all?: true
  }

  export type SalesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to aggregate.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sales
    **/
    _count?: true | SalesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesMaxAggregateInputType
  }

  export type GetSalesAggregateType<T extends SalesAggregateArgs> = {
        [P in keyof T & keyof AggregateSales]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSales[P]>
      : GetScalarType<T[P], AggregateSales[P]>
  }




  export type salesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: salesWhereInput
    orderBy?: salesOrderByWithAggregationInput | salesOrderByWithAggregationInput[]
    by: SalesScalarFieldEnum[] | SalesScalarFieldEnum
    having?: salesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesCountAggregateInputType | true
    _avg?: SalesAvgAggregateInputType
    _sum?: SalesSumAggregateInputType
    _min?: SalesMinAggregateInputType
    _max?: SalesMaxAggregateInputType
  }

  export type SalesGroupByOutputType = {
    sale_id: number
    employee_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number
    unit_price: Decimal
    sale_date: Date
    commission_amount: Decimal | null
    profit: Decimal
    customer_rating: number | null
    _count: SalesCountAggregateOutputType | null
    _avg: SalesAvgAggregateOutputType | null
    _sum: SalesSumAggregateOutputType | null
    _min: SalesMinAggregateOutputType | null
    _max: SalesMaxAggregateOutputType | null
  }

  type GetSalesGroupByPayload<T extends salesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesGroupByOutputType[P]>
            : GetScalarType<T[P], SalesGroupByOutputType[P]>
        }
      >
    >


  export type salesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    employee_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    sale_date?: boolean
    commission_amount?: boolean
    profit?: boolean
    customer_rating?: boolean
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    employee_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    sale_date?: boolean
    commission_amount?: boolean
    profit?: boolean
    customer_rating?: boolean
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sale_id?: boolean
    employee_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    sale_date?: boolean
    commission_amount?: boolean
    profit?: boolean
    customer_rating?: boolean
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }, ExtArgs["result"]["sales"]>

  export type salesSelectScalar = {
    sale_id?: boolean
    employee_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    sale_date?: boolean
    commission_amount?: boolean
    profit?: boolean
    customer_rating?: boolean
  }

  export type salesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sale_id" | "employee_id" | "order_id" | "product_id" | "quantity" | "unit_price" | "sale_date" | "commission_amount" | "profit" | "customer_rating", ExtArgs["result"]["sales"]>
  export type salesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }
  export type salesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }
  export type salesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | sales$employeesArgs<ExtArgs>
    orders?: boolean | sales$ordersArgs<ExtArgs>
    inventory?: boolean | sales$inventoryArgs<ExtArgs>
  }

  export type $salesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sales"
    objects: {
      employees: Prisma.$employeesPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs> | null
      inventory: Prisma.$inventoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      sale_id: number
      employee_id: number | null
      order_id: number | null
      product_id: number | null
      quantity: number
      unit_price: Prisma.Decimal
      sale_date: Date
      commission_amount: Prisma.Decimal | null
      profit: Prisma.Decimal
      customer_rating: number | null
    }, ExtArgs["result"]["sales"]>
    composites: {}
  }

  type salesGetPayload<S extends boolean | null | undefined | salesDefaultArgs> = $Result.GetResult<Prisma.$salesPayload, S>

  type salesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<salesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalesCountAggregateInputType | true
    }

  export interface salesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sales'], meta: { name: 'sales' } }
    /**
     * Find zero or one Sales that matches the filter.
     * @param {salesFindUniqueArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends salesFindUniqueArgs>(args: SelectSubset<T, salesFindUniqueArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sales that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {salesFindUniqueOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends salesFindUniqueOrThrowArgs>(args: SelectSubset<T, salesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends salesFindFirstArgs>(args?: SelectSubset<T, salesFindFirstArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sales that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindFirstOrThrowArgs} args - Arguments to find a Sales
     * @example
     * // Get one Sales
     * const sales = await prisma.sales.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends salesFindFirstOrThrowArgs>(args?: SelectSubset<T, salesFindFirstOrThrowArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sales.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sales.findMany({ take: 10 })
     * 
     * // Only select the `sale_id`
     * const salesWithSale_idOnly = await prisma.sales.findMany({ select: { sale_id: true } })
     * 
     */
    findMany<T extends salesFindManyArgs>(args?: SelectSubset<T, salesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sales.
     * @param {salesCreateArgs} args - Arguments to create a Sales.
     * @example
     * // Create one Sales
     * const Sales = await prisma.sales.create({
     *   data: {
     *     // ... data to create a Sales
     *   }
     * })
     * 
     */
    create<T extends salesCreateArgs>(args: SelectSubset<T, salesCreateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {salesCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends salesCreateManyArgs>(args?: SelectSubset<T, salesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {salesCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sales = await prisma.sales.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `sale_id`
     * const salesWithSale_idOnly = await prisma.sales.createManyAndReturn({
     *   select: { sale_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends salesCreateManyAndReturnArgs>(args?: SelectSubset<T, salesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sales.
     * @param {salesDeleteArgs} args - Arguments to delete one Sales.
     * @example
     * // Delete one Sales
     * const Sales = await prisma.sales.delete({
     *   where: {
     *     // ... filter to delete one Sales
     *   }
     * })
     * 
     */
    delete<T extends salesDeleteArgs>(args: SelectSubset<T, salesDeleteArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sales.
     * @param {salesUpdateArgs} args - Arguments to update one Sales.
     * @example
     * // Update one Sales
     * const sales = await prisma.sales.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends salesUpdateArgs>(args: SelectSubset<T, salesUpdateArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {salesDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sales.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends salesDeleteManyArgs>(args?: SelectSubset<T, salesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends salesUpdateManyArgs>(args: SelectSubset<T, salesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {salesUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sales = await prisma.sales.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `sale_id`
     * const salesWithSale_idOnly = await prisma.sales.updateManyAndReturn({
     *   select: { sale_id: true },
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
    updateManyAndReturn<T extends salesUpdateManyAndReturnArgs>(args: SelectSubset<T, salesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sales.
     * @param {salesUpsertArgs} args - Arguments to update or create a Sales.
     * @example
     * // Update or create a Sales
     * const sales = await prisma.sales.upsert({
     *   create: {
     *     // ... data to create a Sales
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sales we want to update
     *   }
     * })
     */
    upsert<T extends salesUpsertArgs>(args: SelectSubset<T, salesUpsertArgs<ExtArgs>>): Prisma__salesClient<$Result.GetResult<Prisma.$salesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sales.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends salesCountArgs>(
      args?: Subset<T, salesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalesAggregateArgs>(args: Subset<T, SalesAggregateArgs>): Prisma.PrismaPromise<GetSalesAggregateType<T>>

    /**
     * Group by Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {salesGroupByArgs} args - Group by arguments.
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
      T extends salesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: salesGroupByArgs['orderBy'] }
        : { orderBy?: salesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, salesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sales model
   */
  readonly fields: salesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sales.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__salesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employees<T extends sales$employeesArgs<ExtArgs> = {}>(args?: Subset<T, sales$employeesArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends sales$ordersArgs<ExtArgs> = {}>(args?: Subset<T, sales$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inventory<T extends sales$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, sales$inventoryArgs<ExtArgs>>): Prisma__inventoryClient<$Result.GetResult<Prisma.$inventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sales model
   */ 
  interface salesFieldRefs {
    readonly sale_id: FieldRef<"sales", 'Int'>
    readonly employee_id: FieldRef<"sales", 'Int'>
    readonly order_id: FieldRef<"sales", 'Int'>
    readonly product_id: FieldRef<"sales", 'Int'>
    readonly quantity: FieldRef<"sales", 'Int'>
    readonly unit_price: FieldRef<"sales", 'Decimal'>
    readonly sale_date: FieldRef<"sales", 'DateTime'>
    readonly commission_amount: FieldRef<"sales", 'Decimal'>
    readonly profit: FieldRef<"sales", 'Decimal'>
    readonly customer_rating: FieldRef<"sales", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sales findUnique
   */
  export type salesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findUniqueOrThrow
   */
  export type salesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales findFirst
   */
  export type salesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findFirstOrThrow
   */
  export type salesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sales.
     */
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales findMany
   */
  export type salesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter, which sales to fetch.
     */
    where?: salesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sales to fetch.
     */
    orderBy?: salesOrderByWithRelationInput | salesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sales.
     */
    cursor?: salesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sales.
     */
    skip?: number
    distinct?: SalesScalarFieldEnum | SalesScalarFieldEnum[]
  }

  /**
   * sales create
   */
  export type salesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to create a sales.
     */
    data: XOR<salesCreateInput, salesUncheckedCreateInput>
  }

  /**
   * sales createMany
   */
  export type salesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sales createManyAndReturn
   */
  export type salesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to create many sales.
     */
    data: salesCreateManyInput | salesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales update
   */
  export type salesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The data needed to update a sales.
     */
    data: XOR<salesUpdateInput, salesUncheckedUpdateInput>
    /**
     * Choose, which sales to update.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales updateMany
   */
  export type salesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
  }

  /**
   * sales updateManyAndReturn
   */
  export type salesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * The data used to update sales.
     */
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyInput>
    /**
     * Filter which sales to update
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sales upsert
   */
  export type salesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * The filter to search for the sales to update in case it exists.
     */
    where: salesWhereUniqueInput
    /**
     * In case the sales found by the `where` argument doesn't exist, create a new sales with this data.
     */
    create: XOR<salesCreateInput, salesUncheckedCreateInput>
    /**
     * In case the sales was found with the provided `where` argument, update it with this data.
     */
    update: XOR<salesUpdateInput, salesUncheckedUpdateInput>
  }

  /**
   * sales delete
   */
  export type salesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
    /**
     * Filter which sales to delete.
     */
    where: salesWhereUniqueInput
  }

  /**
   * sales deleteMany
   */
  export type salesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sales to delete
     */
    where?: salesWhereInput
    /**
     * Limit how many sales to delete.
     */
    limit?: number
  }

  /**
   * sales.employees
   */
  export type sales$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    where?: employeesWhereInput
  }

  /**
   * sales.orders
   */
  export type sales$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * sales.inventory
   */
  export type sales$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inventory
     */
    select?: inventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the inventory
     */
    omit?: inventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inventoryInclude<ExtArgs> | null
    where?: inventoryWhereInput
  }

  /**
   * sales without action
   */
  export type salesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sales
     */
    select?: salesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sales
     */
    omit?: salesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: salesInclude<ExtArgs> | null
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


  export const CustomersScalarFieldEnum: {
    customer_id: 'customer_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    registration_date: 'registration_date',
    total_spent: 'total_spent',
    loyalty_points: 'loyalty_points',
    segment: 'segment',
    last_purchase_date: 'last_purchase_date'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Employee_benefitsScalarFieldEnum: {
    benefit_id: 'benefit_id',
    employee_id: 'employee_id',
    health_insurance_plan: 'health_insurance_plan',
    health_insurance_cost: 'health_insurance_cost',
    retirement_contribution_pct: 'retirement_contribution_pct',
    paid_time_off_days: 'paid_time_off_days',
    sick_leave_days: 'sick_leave_days',
    tuition_reimbursement: 'tuition_reimbursement',
    life_insurance_coverage: 'life_insurance_coverage',
    dental_coverage: 'dental_coverage',
    vision_coverage: 'vision_coverage',
    wellness_stipend: 'wellness_stipend'
  };

  export type Employee_benefitsScalarFieldEnum = (typeof Employee_benefitsScalarFieldEnum)[keyof typeof Employee_benefitsScalarFieldEnum]


  export const EmployeesScalarFieldEnum: {
    employee_id: 'employee_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    department: 'department',
    position: 'position',
    hire_date: 'hire_date',
    salary: 'salary',
    commission_pct: 'commission_pct',
    manager_id: 'manager_id',
    performance_score: 'performance_score'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    category: 'category',
    supplier: 'supplier',
    stock_quantity: 'stock_quantity',
    cost_price: 'cost_price',
    selling_price: 'selling_price',
    reorder_level: 'reorder_level',
    last_restock_date: 'last_restock_date',
    profit_margin: 'profit_margin'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    customer_id: 'customer_id',
    order_date: 'order_date',
    total_amount: 'total_amount',
    status: 'status',
    payment_method: 'payment_method',
    shipping_address: 'shipping_address',
    tracking_number: 'tracking_number',
    estimated_delivery: 'estimated_delivery'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SalesScalarFieldEnum: {
    sale_id: 'sale_id',
    employee_id: 'employee_id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price',
    sale_date: 'sale_date',
    commission_amount: 'commission_amount',
    profit: 'profit',
    customer_rating: 'customer_rating'
  };

  export type SalesScalarFieldEnum = (typeof SalesScalarFieldEnum)[keyof typeof SalesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customer_id?: IntFilter<"customers"> | number
    first_name?: StringFilter<"customers"> | string
    last_name?: StringFilter<"customers"> | string
    email?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    registration_date?: DateTimeFilter<"customers"> | Date | string
    total_spent?: DecimalNullableFilter<"customers"> | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: IntNullableFilter<"customers"> | number | null
    segment?: StringNullableFilter<"customers"> | string | null
    last_purchase_date?: DateTimeNullableFilter<"customers"> | Date | string | null
    orders?: OrdersListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    registration_date?: SortOrder
    total_spent?: SortOrderInput | SortOrder
    loyalty_points?: SortOrderInput | SortOrder
    segment?: SortOrderInput | SortOrder
    last_purchase_date?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    email?: string
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    first_name?: StringFilter<"customers"> | string
    last_name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    registration_date?: DateTimeFilter<"customers"> | Date | string
    total_spent?: DecimalNullableFilter<"customers"> | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: IntNullableFilter<"customers"> | number | null
    segment?: StringNullableFilter<"customers"> | string | null
    last_purchase_date?: DateTimeNullableFilter<"customers"> | Date | string | null
    orders?: OrdersListRelationFilter
  }, "customer_id" | "email">

  export type customersOrderByWithAggregationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    registration_date?: SortOrder
    total_spent?: SortOrderInput | SortOrder
    loyalty_points?: SortOrderInput | SortOrder
    segment?: SortOrderInput | SortOrder
    last_purchase_date?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customers"> | number
    first_name?: StringWithAggregatesFilter<"customers"> | string
    last_name?: StringWithAggregatesFilter<"customers"> | string
    email?: StringWithAggregatesFilter<"customers"> | string
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    registration_date?: DateTimeWithAggregatesFilter<"customers"> | Date | string
    total_spent?: DecimalNullableWithAggregatesFilter<"customers"> | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: IntNullableWithAggregatesFilter<"customers"> | number | null
    segment?: StringNullableWithAggregatesFilter<"customers"> | string | null
    last_purchase_date?: DateTimeNullableWithAggregatesFilter<"customers"> | Date | string | null
  }

  export type employee_benefitsWhereInput = {
    AND?: employee_benefitsWhereInput | employee_benefitsWhereInput[]
    OR?: employee_benefitsWhereInput[]
    NOT?: employee_benefitsWhereInput | employee_benefitsWhereInput[]
    benefit_id?: IntFilter<"employee_benefits"> | number
    employee_id?: IntNullableFilter<"employee_benefits"> | number | null
    health_insurance_plan?: StringFilter<"employee_benefits"> | string
    health_insurance_cost?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFilter<"employee_benefits"> | number
    sick_leave_days?: IntFilter<"employee_benefits"> | number
    tuition_reimbursement?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    dental_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    vision_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    wellness_stipend?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    employees?: XOR<EmployeesNullableScalarRelationFilter, employeesWhereInput> | null
  }

  export type employee_benefitsOrderByWithRelationInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    health_insurance_plan?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrderInput | SortOrder
    life_insurance_coverage?: SortOrder
    dental_coverage?: SortOrderInput | SortOrder
    vision_coverage?: SortOrderInput | SortOrder
    wellness_stipend?: SortOrderInput | SortOrder
    employees?: employeesOrderByWithRelationInput
  }

  export type employee_benefitsWhereUniqueInput = Prisma.AtLeast<{
    benefit_id?: number
    AND?: employee_benefitsWhereInput | employee_benefitsWhereInput[]
    OR?: employee_benefitsWhereInput[]
    NOT?: employee_benefitsWhereInput | employee_benefitsWhereInput[]
    employee_id?: IntNullableFilter<"employee_benefits"> | number | null
    health_insurance_plan?: StringFilter<"employee_benefits"> | string
    health_insurance_cost?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFilter<"employee_benefits"> | number
    sick_leave_days?: IntFilter<"employee_benefits"> | number
    tuition_reimbursement?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    dental_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    vision_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    wellness_stipend?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    employees?: XOR<EmployeesNullableScalarRelationFilter, employeesWhereInput> | null
  }, "benefit_id">

  export type employee_benefitsOrderByWithAggregationInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    health_insurance_plan?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrderInput | SortOrder
    life_insurance_coverage?: SortOrder
    dental_coverage?: SortOrderInput | SortOrder
    vision_coverage?: SortOrderInput | SortOrder
    wellness_stipend?: SortOrderInput | SortOrder
    _count?: employee_benefitsCountOrderByAggregateInput
    _avg?: employee_benefitsAvgOrderByAggregateInput
    _max?: employee_benefitsMaxOrderByAggregateInput
    _min?: employee_benefitsMinOrderByAggregateInput
    _sum?: employee_benefitsSumOrderByAggregateInput
  }

  export type employee_benefitsScalarWhereWithAggregatesInput = {
    AND?: employee_benefitsScalarWhereWithAggregatesInput | employee_benefitsScalarWhereWithAggregatesInput[]
    OR?: employee_benefitsScalarWhereWithAggregatesInput[]
    NOT?: employee_benefitsScalarWhereWithAggregatesInput | employee_benefitsScalarWhereWithAggregatesInput[]
    benefit_id?: IntWithAggregatesFilter<"employee_benefits"> | number
    employee_id?: IntNullableWithAggregatesFilter<"employee_benefits"> | number | null
    health_insurance_plan?: StringWithAggregatesFilter<"employee_benefits"> | string
    health_insurance_cost?: DecimalWithAggregatesFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalWithAggregatesFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntWithAggregatesFilter<"employee_benefits"> | number
    sick_leave_days?: IntWithAggregatesFilter<"employee_benefits"> | number
    tuition_reimbursement?: DecimalNullableWithAggregatesFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalWithAggregatesFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    dental_coverage?: BoolNullableWithAggregatesFilter<"employee_benefits"> | boolean | null
    vision_coverage?: BoolNullableWithAggregatesFilter<"employee_benefits"> | boolean | null
    wellness_stipend?: DecimalNullableWithAggregatesFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
  }

  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    employee_id?: IntFilter<"employees"> | number
    first_name?: StringFilter<"employees"> | string
    last_name?: StringFilter<"employees"> | string
    email?: StringFilter<"employees"> | string
    department?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    hire_date?: DateTimeFilter<"employees"> | Date | string
    salary?: DecimalFilter<"employees"> | Decimal | DecimalJsLike | number | string
    commission_pct?: DecimalNullableFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
    manager_id?: IntNullableFilter<"employees"> | number | null
    performance_score?: DecimalNullableFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: Employee_benefitsListRelationFilter
    sales?: SalesListRelationFilter
  }

  export type employeesOrderByWithRelationInput = {
    employee_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    position?: SortOrder
    hire_date?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrderInput | SortOrder
    manager_id?: SortOrderInput | SortOrder
    performance_score?: SortOrderInput | SortOrder
    employee_benefits?: employee_benefitsOrderByRelationAggregateInput
    sales?: salesOrderByRelationAggregateInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    employee_id?: number
    email?: string
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    first_name?: StringFilter<"employees"> | string
    last_name?: StringFilter<"employees"> | string
    department?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    hire_date?: DateTimeFilter<"employees"> | Date | string
    salary?: DecimalFilter<"employees"> | Decimal | DecimalJsLike | number | string
    commission_pct?: DecimalNullableFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
    manager_id?: IntNullableFilter<"employees"> | number | null
    performance_score?: DecimalNullableFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: Employee_benefitsListRelationFilter
    sales?: SalesListRelationFilter
  }, "employee_id" | "email">

  export type employeesOrderByWithAggregationInput = {
    employee_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    position?: SortOrder
    hire_date?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrderInput | SortOrder
    manager_id?: SortOrderInput | SortOrder
    performance_score?: SortOrderInput | SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    employee_id?: IntWithAggregatesFilter<"employees"> | number
    first_name?: StringWithAggregatesFilter<"employees"> | string
    last_name?: StringWithAggregatesFilter<"employees"> | string
    email?: StringWithAggregatesFilter<"employees"> | string
    department?: StringWithAggregatesFilter<"employees"> | string
    position?: StringWithAggregatesFilter<"employees"> | string
    hire_date?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    salary?: DecimalWithAggregatesFilter<"employees"> | Decimal | DecimalJsLike | number | string
    commission_pct?: DecimalNullableWithAggregatesFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
    manager_id?: IntNullableWithAggregatesFilter<"employees"> | number | null
    performance_score?: DecimalNullableWithAggregatesFilter<"employees"> | Decimal | DecimalJsLike | number | string | null
  }

  export type inventoryWhereInput = {
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    product_id?: IntFilter<"inventory"> | number
    product_name?: StringFilter<"inventory"> | string
    category?: StringFilter<"inventory"> | string
    supplier?: StringFilter<"inventory"> | string
    stock_quantity?: IntFilter<"inventory"> | number
    cost_price?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFilter<"inventory"> | number
    last_restock_date?: DateTimeFilter<"inventory"> | Date | string
    profit_margin?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    sales?: SalesListRelationFilter
  }

  export type inventoryOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    supplier?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    last_restock_date?: SortOrder
    profit_margin?: SortOrder
    sales?: salesOrderByRelationAggregateInput
  }

  export type inventoryWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: inventoryWhereInput | inventoryWhereInput[]
    OR?: inventoryWhereInput[]
    NOT?: inventoryWhereInput | inventoryWhereInput[]
    product_name?: StringFilter<"inventory"> | string
    category?: StringFilter<"inventory"> | string
    supplier?: StringFilter<"inventory"> | string
    stock_quantity?: IntFilter<"inventory"> | number
    cost_price?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFilter<"inventory"> | number
    last_restock_date?: DateTimeFilter<"inventory"> | Date | string
    profit_margin?: DecimalFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    sales?: SalesListRelationFilter
  }, "product_id">

  export type inventoryOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    supplier?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    last_restock_date?: SortOrder
    profit_margin?: SortOrder
    _count?: inventoryCountOrderByAggregateInput
    _avg?: inventoryAvgOrderByAggregateInput
    _max?: inventoryMaxOrderByAggregateInput
    _min?: inventoryMinOrderByAggregateInput
    _sum?: inventorySumOrderByAggregateInput
  }

  export type inventoryScalarWhereWithAggregatesInput = {
    AND?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    OR?: inventoryScalarWhereWithAggregatesInput[]
    NOT?: inventoryScalarWhereWithAggregatesInput | inventoryScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"inventory"> | number
    product_name?: StringWithAggregatesFilter<"inventory"> | string
    category?: StringWithAggregatesFilter<"inventory"> | string
    supplier?: StringWithAggregatesFilter<"inventory"> | string
    stock_quantity?: IntWithAggregatesFilter<"inventory"> | number
    cost_price?: DecimalWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string
    reorder_level?: IntWithAggregatesFilter<"inventory"> | number
    last_restock_date?: DateTimeWithAggregatesFilter<"inventory"> | Date | string
    profit_margin?: DecimalWithAggregatesFilter<"inventory"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeFilter<"orders"> | Date | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"orders"> | string
    payment_method?: StringFilter<"orders"> | string
    shipping_address?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    estimated_delivery?: DateTimeNullableFilter<"orders"> | Date | string | null
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    sales?: SalesListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_date?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    shipping_address?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    estimated_delivery?: SortOrderInput | SortOrder
    customers?: customersOrderByWithRelationInput
    sales?: salesOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeFilter<"orders"> | Date | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"orders"> | string
    payment_method?: StringFilter<"orders"> | string
    shipping_address?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    estimated_delivery?: DateTimeNullableFilter<"orders"> | Date | string | null
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    sales?: SalesListRelationFilter
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_date?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    shipping_address?: SortOrder
    tracking_number?: SortOrderInput | SortOrder
    estimated_delivery?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"orders"> | number
    customer_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    order_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    total_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringWithAggregatesFilter<"orders"> | string
    payment_method?: StringWithAggregatesFilter<"orders"> | string
    shipping_address?: StringWithAggregatesFilter<"orders"> | string
    tracking_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    estimated_delivery?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type salesWhereInput = {
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    sale_id?: IntFilter<"sales"> | number
    employee_id?: IntNullableFilter<"sales"> | number | null
    order_id?: IntNullableFilter<"sales"> | number | null
    product_id?: IntNullableFilter<"sales"> | number | null
    quantity?: IntFilter<"sales"> | number
    unit_price?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    commission_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    customer_rating?: IntNullableFilter<"sales"> | number | null
    employees?: XOR<EmployeesNullableScalarRelationFilter, employeesWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }

  export type salesOrderByWithRelationInput = {
    sale_id?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sale_date?: SortOrder
    commission_amount?: SortOrderInput | SortOrder
    profit?: SortOrder
    customer_rating?: SortOrderInput | SortOrder
    employees?: employeesOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
    inventory?: inventoryOrderByWithRelationInput
  }

  export type salesWhereUniqueInput = Prisma.AtLeast<{
    sale_id?: number
    AND?: salesWhereInput | salesWhereInput[]
    OR?: salesWhereInput[]
    NOT?: salesWhereInput | salesWhereInput[]
    employee_id?: IntNullableFilter<"sales"> | number | null
    order_id?: IntNullableFilter<"sales"> | number | null
    product_id?: IntNullableFilter<"sales"> | number | null
    quantity?: IntFilter<"sales"> | number
    unit_price?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    commission_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    customer_rating?: IntNullableFilter<"sales"> | number | null
    employees?: XOR<EmployeesNullableScalarRelationFilter, employeesWhereInput> | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    inventory?: XOR<InventoryNullableScalarRelationFilter, inventoryWhereInput> | null
  }, "sale_id">

  export type salesOrderByWithAggregationInput = {
    sale_id?: SortOrder
    employee_id?: SortOrderInput | SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sale_date?: SortOrder
    commission_amount?: SortOrderInput | SortOrder
    profit?: SortOrder
    customer_rating?: SortOrderInput | SortOrder
    _count?: salesCountOrderByAggregateInput
    _avg?: salesAvgOrderByAggregateInput
    _max?: salesMaxOrderByAggregateInput
    _min?: salesMinOrderByAggregateInput
    _sum?: salesSumOrderByAggregateInput
  }

  export type salesScalarWhereWithAggregatesInput = {
    AND?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    OR?: salesScalarWhereWithAggregatesInput[]
    NOT?: salesScalarWhereWithAggregatesInput | salesScalarWhereWithAggregatesInput[]
    sale_id?: IntWithAggregatesFilter<"sales"> | number
    employee_id?: IntNullableWithAggregatesFilter<"sales"> | number | null
    order_id?: IntNullableWithAggregatesFilter<"sales"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"sales"> | number | null
    quantity?: IntWithAggregatesFilter<"sales"> | number
    unit_price?: DecimalWithAggregatesFilter<"sales"> | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeWithAggregatesFilter<"sales"> | Date | string
    commission_amount?: DecimalNullableWithAggregatesFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalWithAggregatesFilter<"sales"> | Decimal | DecimalJsLike | number | string
    customer_rating?: IntNullableWithAggregatesFilter<"sales"> | number | null
  }

  export type customersCreateInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    registration_date: Date | string
    total_spent?: Decimal | DecimalJsLike | number | string | null
    loyalty_points?: number | null
    segment?: string | null
    last_purchase_date?: Date | string | null
    orders?: ordersCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    registration_date: Date | string
    total_spent?: Decimal | DecimalJsLike | number | string | null
    loyalty_points?: number | null
    segment?: string | null
    last_purchase_date?: Date | string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    registration_date: Date | string
    total_spent?: Decimal | DecimalJsLike | number | string | null
    loyalty_points?: number | null
    segment?: string | null
    last_purchase_date?: Date | string | null
  }

  export type customersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type employee_benefitsCreateInput = {
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
    employees?: employeesCreateNestedOneWithoutEmployee_benefitsInput
  }

  export type employee_benefitsUncheckedCreateInput = {
    benefit_id?: number
    employee_id?: number | null
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUpdateInput = {
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employees?: employeesUpdateOneWithoutEmployee_benefitsNestedInput
  }

  export type employee_benefitsUncheckedUpdateInput = {
    benefit_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsCreateManyInput = {
    benefit_id?: number
    employee_id?: number | null
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUpdateManyMutationInput = {
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUncheckedUpdateManyInput = {
    benefit_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employeesCreateInput = {
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsCreateNestedManyWithoutEmployeesInput
    sales?: salesCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateInput = {
    employee_id?: number
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUncheckedCreateNestedManyWithoutEmployeesInput
    sales?: salesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUpdateManyWithoutEmployeesNestedInput
    sales?: salesUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUncheckedUpdateManyWithoutEmployeesNestedInput
    sales?: salesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesCreateManyInput = {
    employee_id?: number
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
  }

  export type employeesUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employeesUncheckedUpdateManyInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type inventoryCreateInput = {
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    reorder_level: number
    last_restock_date: Date | string
    profit_margin: Decimal | DecimalJsLike | number | string
    sales?: salesCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUncheckedCreateInput = {
    product_id?: number
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    reorder_level: number
    last_restock_date: Date | string
    profit_margin: Decimal | DecimalJsLike | number | string
    sales?: salesUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type inventoryUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: salesUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sales?: salesUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type inventoryCreateManyInput = {
    product_id?: number
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    reorder_level: number
    last_restock_date: Date | string
    profit_margin: Decimal | DecimalJsLike | number | string
  }

  export type inventoryUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type inventoryUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateInput = {
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
    customers?: customersCreateNestedOneWithoutOrdersInput
    sales?: salesCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id?: number
    customer_id?: number | null
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
    sales?: salesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutOrdersNestedInput
    sales?: salesUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id?: number
    customer_id?: number | null
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesCreateInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
    employees?: employeesCreateNestedOneWithoutSalesInput
    orders?: ordersCreateNestedOneWithoutSalesInput
    inventory?: inventoryCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateInput = {
    sale_id?: number
    employee_id?: number | null
    order_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
    employees?: employeesUpdateOneWithoutSalesNestedInput
    orders?: ordersUpdateOneWithoutSalesNestedInput
    inventory?: inventoryUpdateOneWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesCreateManyInput = {
    sale_id?: number
    employee_id?: number | null
    order_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesUncheckedUpdateManyInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    registration_date?: SortOrder
    total_spent?: SortOrder
    loyalty_points?: SortOrder
    segment?: SortOrder
    last_purchase_date?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customer_id?: SortOrder
    total_spent?: SortOrder
    loyalty_points?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    registration_date?: SortOrder
    total_spent?: SortOrder
    loyalty_points?: SortOrder
    segment?: SortOrder
    last_purchase_date?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    registration_date?: SortOrder
    total_spent?: SortOrder
    loyalty_points?: SortOrder
    segment?: SortOrder
    last_purchase_date?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customer_id?: SortOrder
    total_spent?: SortOrder
    loyalty_points?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EmployeesNullableScalarRelationFilter = {
    is?: employeesWhereInput | null
    isNot?: employeesWhereInput | null
  }

  export type employee_benefitsCountOrderByAggregateInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrder
    health_insurance_plan?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrder
    life_insurance_coverage?: SortOrder
    dental_coverage?: SortOrder
    vision_coverage?: SortOrder
    wellness_stipend?: SortOrder
  }

  export type employee_benefitsAvgOrderByAggregateInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrder
    life_insurance_coverage?: SortOrder
    wellness_stipend?: SortOrder
  }

  export type employee_benefitsMaxOrderByAggregateInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrder
    health_insurance_plan?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrder
    life_insurance_coverage?: SortOrder
    dental_coverage?: SortOrder
    vision_coverage?: SortOrder
    wellness_stipend?: SortOrder
  }

  export type employee_benefitsMinOrderByAggregateInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrder
    health_insurance_plan?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrder
    life_insurance_coverage?: SortOrder
    dental_coverage?: SortOrder
    vision_coverage?: SortOrder
    wellness_stipend?: SortOrder
  }

  export type employee_benefitsSumOrderByAggregateInput = {
    benefit_id?: SortOrder
    employee_id?: SortOrder
    health_insurance_cost?: SortOrder
    retirement_contribution_pct?: SortOrder
    paid_time_off_days?: SortOrder
    sick_leave_days?: SortOrder
    tuition_reimbursement?: SortOrder
    life_insurance_coverage?: SortOrder
    wellness_stipend?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type Employee_benefitsListRelationFilter = {
    every?: employee_benefitsWhereInput
    some?: employee_benefitsWhereInput
    none?: employee_benefitsWhereInput
  }

  export type SalesListRelationFilter = {
    every?: salesWhereInput
    some?: salesWhereInput
    none?: salesWhereInput
  }

  export type employee_benefitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type salesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesCountOrderByAggregateInput = {
    employee_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    position?: SortOrder
    hire_date?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrder
    manager_id?: SortOrder
    performance_score?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    employee_id?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrder
    manager_id?: SortOrder
    performance_score?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    employee_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    position?: SortOrder
    hire_date?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrder
    manager_id?: SortOrder
    performance_score?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    employee_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    department?: SortOrder
    position?: SortOrder
    hire_date?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrder
    manager_id?: SortOrder
    performance_score?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    employee_id?: SortOrder
    salary?: SortOrder
    commission_pct?: SortOrder
    manager_id?: SortOrder
    performance_score?: SortOrder
  }

  export type inventoryCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    supplier?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    last_restock_date?: SortOrder
    profit_margin?: SortOrder
  }

  export type inventoryAvgOrderByAggregateInput = {
    product_id?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    profit_margin?: SortOrder
  }

  export type inventoryMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    supplier?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    last_restock_date?: SortOrder
    profit_margin?: SortOrder
  }

  export type inventoryMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category?: SortOrder
    supplier?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    last_restock_date?: SortOrder
    profit_margin?: SortOrder
  }

  export type inventorySumOrderByAggregateInput = {
    product_id?: SortOrder
    stock_quantity?: SortOrder
    cost_price?: SortOrder
    selling_price?: SortOrder
    reorder_level?: SortOrder
    profit_margin?: SortOrder
  }

  export type CustomersNullableScalarRelationFilter = {
    is?: customersWhereInput | null
    isNot?: customersWhereInput | null
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    shipping_address?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    total_amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    shipping_address?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
    total_amount?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    shipping_address?: SortOrder
    tracking_number?: SortOrder
    estimated_delivery?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    total_amount?: SortOrder
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type InventoryNullableScalarRelationFilter = {
    is?: inventoryWhereInput | null
    isNot?: inventoryWhereInput | null
  }

  export type salesCountOrderByAggregateInput = {
    sale_id?: SortOrder
    employee_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sale_date?: SortOrder
    commission_amount?: SortOrder
    profit?: SortOrder
    customer_rating?: SortOrder
  }

  export type salesAvgOrderByAggregateInput = {
    sale_id?: SortOrder
    employee_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    commission_amount?: SortOrder
    profit?: SortOrder
    customer_rating?: SortOrder
  }

  export type salesMaxOrderByAggregateInput = {
    sale_id?: SortOrder
    employee_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sale_date?: SortOrder
    commission_amount?: SortOrder
    profit?: SortOrder
    customer_rating?: SortOrder
  }

  export type salesMinOrderByAggregateInput = {
    sale_id?: SortOrder
    employee_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    sale_date?: SortOrder
    commission_amount?: SortOrder
    profit?: SortOrder
    customer_rating?: SortOrder
  }

  export type salesSumOrderByAggregateInput = {
    sale_id?: SortOrder
    employee_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    commission_amount?: SortOrder
    profit?: SortOrder
    customer_rating?: SortOrder
  }

  export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutEmployee_benefitsInput = {
    create?: XOR<employeesCreateWithoutEmployee_benefitsInput, employeesUncheckedCreateWithoutEmployee_benefitsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutEmployee_benefitsInput
    connect?: employeesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type employeesUpdateOneWithoutEmployee_benefitsNestedInput = {
    create?: XOR<employeesCreateWithoutEmployee_benefitsInput, employeesUncheckedCreateWithoutEmployee_benefitsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutEmployee_benefitsInput
    upsert?: employeesUpsertWithoutEmployee_benefitsInput
    disconnect?: employeesWhereInput | boolean
    delete?: employeesWhereInput | boolean
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutEmployee_benefitsInput, employeesUpdateWithoutEmployee_benefitsInput>, employeesUncheckedUpdateWithoutEmployee_benefitsInput>
  }

  export type employee_benefitsCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput> | employee_benefitsCreateWithoutEmployeesInput[] | employee_benefitsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employee_benefitsCreateOrConnectWithoutEmployeesInput | employee_benefitsCreateOrConnectWithoutEmployeesInput[]
    createMany?: employee_benefitsCreateManyEmployeesInputEnvelope
    connect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
  }

  export type salesCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput> | salesCreateWithoutEmployeesInput[] | salesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: salesCreateOrConnectWithoutEmployeesInput | salesCreateOrConnectWithoutEmployeesInput[]
    createMany?: salesCreateManyEmployeesInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type employee_benefitsUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput> | employee_benefitsCreateWithoutEmployeesInput[] | employee_benefitsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employee_benefitsCreateOrConnectWithoutEmployeesInput | employee_benefitsCreateOrConnectWithoutEmployeesInput[]
    createMany?: employee_benefitsCreateManyEmployeesInputEnvelope
    connect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutEmployeesInput = {
    create?: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput> | salesCreateWithoutEmployeesInput[] | salesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: salesCreateOrConnectWithoutEmployeesInput | salesCreateOrConnectWithoutEmployeesInput[]
    createMany?: salesCreateManyEmployeesInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type employee_benefitsUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput> | employee_benefitsCreateWithoutEmployeesInput[] | employee_benefitsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employee_benefitsCreateOrConnectWithoutEmployeesInput | employee_benefitsCreateOrConnectWithoutEmployeesInput[]
    upsert?: employee_benefitsUpsertWithWhereUniqueWithoutEmployeesInput | employee_benefitsUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: employee_benefitsCreateManyEmployeesInputEnvelope
    set?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    disconnect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    delete?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    connect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    update?: employee_benefitsUpdateWithWhereUniqueWithoutEmployeesInput | employee_benefitsUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: employee_benefitsUpdateManyWithWhereWithoutEmployeesInput | employee_benefitsUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: employee_benefitsScalarWhereInput | employee_benefitsScalarWhereInput[]
  }

  export type salesUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput> | salesCreateWithoutEmployeesInput[] | salesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: salesCreateOrConnectWithoutEmployeesInput | salesCreateOrConnectWithoutEmployeesInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutEmployeesInput | salesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: salesCreateManyEmployeesInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutEmployeesInput | salesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: salesUpdateManyWithWhereWithoutEmployeesInput | salesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type employee_benefitsUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput> | employee_benefitsCreateWithoutEmployeesInput[] | employee_benefitsUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: employee_benefitsCreateOrConnectWithoutEmployeesInput | employee_benefitsCreateOrConnectWithoutEmployeesInput[]
    upsert?: employee_benefitsUpsertWithWhereUniqueWithoutEmployeesInput | employee_benefitsUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: employee_benefitsCreateManyEmployeesInputEnvelope
    set?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    disconnect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    delete?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    connect?: employee_benefitsWhereUniqueInput | employee_benefitsWhereUniqueInput[]
    update?: employee_benefitsUpdateWithWhereUniqueWithoutEmployeesInput | employee_benefitsUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: employee_benefitsUpdateManyWithWhereWithoutEmployeesInput | employee_benefitsUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: employee_benefitsScalarWhereInput | employee_benefitsScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutEmployeesNestedInput = {
    create?: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput> | salesCreateWithoutEmployeesInput[] | salesUncheckedCreateWithoutEmployeesInput[]
    connectOrCreate?: salesCreateOrConnectWithoutEmployeesInput | salesCreateOrConnectWithoutEmployeesInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutEmployeesInput | salesUpsertWithWhereUniqueWithoutEmployeesInput[]
    createMany?: salesCreateManyEmployeesInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutEmployeesInput | salesUpdateWithWhereUniqueWithoutEmployeesInput[]
    updateMany?: salesUpdateManyWithWhereWithoutEmployeesInput | salesUpdateManyWithWhereWithoutEmployeesInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type salesCreateNestedManyWithoutInventoryInput = {
    create?: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput> | salesCreateWithoutInventoryInput[] | salesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[]
    createMany?: salesCreateManyInventoryInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput> | salesCreateWithoutInventoryInput[] | salesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[]
    createMany?: salesCreateManyInventoryInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput> | salesCreateWithoutInventoryInput[] | salesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutInventoryInput | salesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: salesCreateManyInventoryInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutInventoryInput | salesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: salesUpdateManyWithWhereWithoutInventoryInput | salesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput> | salesCreateWithoutInventoryInput[] | salesUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: salesCreateOrConnectWithoutInventoryInput | salesCreateOrConnectWithoutInventoryInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutInventoryInput | salesUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: salesCreateManyInventoryInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutInventoryInput | salesUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: salesUpdateManyWithWhereWithoutInventoryInput | salesUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type customersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    connect?: customersWhereUniqueInput
  }

  export type salesCreateNestedManyWithoutOrdersInput = {
    create?: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput> | salesCreateWithoutOrdersInput[] | salesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutOrdersInput | salesCreateOrConnectWithoutOrdersInput[]
    createMany?: salesCreateManyOrdersInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type salesUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput> | salesCreateWithoutOrdersInput[] | salesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutOrdersInput | salesCreateOrConnectWithoutOrdersInput[]
    createMany?: salesCreateManyOrdersInputEnvelope
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
  }

  export type customersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    upsert?: customersUpsertWithoutOrdersInput
    disconnect?: customersWhereInput | boolean
    delete?: customersWhereInput | boolean
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutOrdersInput, customersUpdateWithoutOrdersInput>, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type salesUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput> | salesCreateWithoutOrdersInput[] | salesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutOrdersInput | salesCreateOrConnectWithoutOrdersInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutOrdersInput | salesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: salesCreateManyOrdersInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutOrdersInput | salesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: salesUpdateManyWithWhereWithoutOrdersInput | salesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type salesUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput> | salesCreateWithoutOrdersInput[] | salesUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: salesCreateOrConnectWithoutOrdersInput | salesCreateOrConnectWithoutOrdersInput[]
    upsert?: salesUpsertWithWhereUniqueWithoutOrdersInput | salesUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: salesCreateManyOrdersInputEnvelope
    set?: salesWhereUniqueInput | salesWhereUniqueInput[]
    disconnect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    delete?: salesWhereUniqueInput | salesWhereUniqueInput[]
    connect?: salesWhereUniqueInput | salesWhereUniqueInput[]
    update?: salesUpdateWithWhereUniqueWithoutOrdersInput | salesUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: salesUpdateManyWithWhereWithoutOrdersInput | salesUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: salesScalarWhereInput | salesScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutSalesInput = {
    create?: XOR<employeesCreateWithoutSalesInput, employeesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutSalesInput
    connect?: employeesWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutSalesInput = {
    create?: XOR<ordersCreateWithoutSalesInput, ordersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutSalesInput
    connect?: ordersWhereUniqueInput
  }

  export type inventoryCreateNestedOneWithoutSalesInput = {
    create?: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutSalesInput
    connect?: inventoryWhereUniqueInput
  }

  export type employeesUpdateOneWithoutSalesNestedInput = {
    create?: XOR<employeesCreateWithoutSalesInput, employeesUncheckedCreateWithoutSalesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutSalesInput
    upsert?: employeesUpsertWithoutSalesInput
    disconnect?: employeesWhereInput | boolean
    delete?: employeesWhereInput | boolean
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutSalesInput, employeesUpdateWithoutSalesInput>, employeesUncheckedUpdateWithoutSalesInput>
  }

  export type ordersUpdateOneWithoutSalesNestedInput = {
    create?: XOR<ordersCreateWithoutSalesInput, ordersUncheckedCreateWithoutSalesInput>
    connectOrCreate?: ordersCreateOrConnectWithoutSalesInput
    upsert?: ordersUpsertWithoutSalesInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutSalesInput, ordersUpdateWithoutSalesInput>, ordersUncheckedUpdateWithoutSalesInput>
  }

  export type inventoryUpdateOneWithoutSalesNestedInput = {
    create?: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>
    connectOrCreate?: inventoryCreateOrConnectWithoutSalesInput
    upsert?: inventoryUpsertWithoutSalesInput
    disconnect?: inventoryWhereInput | boolean
    delete?: inventoryWhereInput | boolean
    connect?: inventoryWhereUniqueInput
    update?: XOR<XOR<inventoryUpdateToOneWithWhereWithoutSalesInput, inventoryUpdateWithoutSalesInput>, inventoryUncheckedUpdateWithoutSalesInput>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ordersCreateWithoutCustomersInput = {
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
    sales?: salesCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomersInput = {
    order_id?: number
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
    sales?: salesUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersCreateManyCustomersInputEnvelope = {
    data: ordersCreateManyCustomersInput | ordersCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeFilter<"orders"> | Date | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    status?: StringFilter<"orders"> | string
    payment_method?: StringFilter<"orders"> | string
    shipping_address?: StringFilter<"orders"> | string
    tracking_number?: StringNullableFilter<"orders"> | string | null
    estimated_delivery?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type employeesCreateWithoutEmployee_benefitsInput = {
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    sales?: salesCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutEmployee_benefitsInput = {
    employee_id?: number
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    sales?: salesUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutEmployee_benefitsInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutEmployee_benefitsInput, employeesUncheckedCreateWithoutEmployee_benefitsInput>
  }

  export type employeesUpsertWithoutEmployee_benefitsInput = {
    update: XOR<employeesUpdateWithoutEmployee_benefitsInput, employeesUncheckedUpdateWithoutEmployee_benefitsInput>
    create: XOR<employeesCreateWithoutEmployee_benefitsInput, employeesUncheckedCreateWithoutEmployee_benefitsInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutEmployee_benefitsInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutEmployee_benefitsInput, employeesUncheckedUpdateWithoutEmployee_benefitsInput>
  }

  export type employeesUpdateWithoutEmployee_benefitsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sales?: salesUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutEmployee_benefitsInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sales?: salesUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type employee_benefitsCreateWithoutEmployeesInput = {
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUncheckedCreateWithoutEmployeesInput = {
    benefit_id?: number
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsCreateOrConnectWithoutEmployeesInput = {
    where: employee_benefitsWhereUniqueInput
    create: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput>
  }

  export type employee_benefitsCreateManyEmployeesInputEnvelope = {
    data: employee_benefitsCreateManyEmployeesInput | employee_benefitsCreateManyEmployeesInput[]
    skipDuplicates?: boolean
  }

  export type salesCreateWithoutEmployeesInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
    orders?: ordersCreateNestedOneWithoutSalesInput
    inventory?: inventoryCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutEmployeesInput = {
    sale_id?: number
    order_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesCreateOrConnectWithoutEmployeesInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput>
  }

  export type salesCreateManyEmployeesInputEnvelope = {
    data: salesCreateManyEmployeesInput | salesCreateManyEmployeesInput[]
    skipDuplicates?: boolean
  }

  export type employee_benefitsUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: employee_benefitsWhereUniqueInput
    update: XOR<employee_benefitsUpdateWithoutEmployeesInput, employee_benefitsUncheckedUpdateWithoutEmployeesInput>
    create: XOR<employee_benefitsCreateWithoutEmployeesInput, employee_benefitsUncheckedCreateWithoutEmployeesInput>
  }

  export type employee_benefitsUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: employee_benefitsWhereUniqueInput
    data: XOR<employee_benefitsUpdateWithoutEmployeesInput, employee_benefitsUncheckedUpdateWithoutEmployeesInput>
  }

  export type employee_benefitsUpdateManyWithWhereWithoutEmployeesInput = {
    where: employee_benefitsScalarWhereInput
    data: XOR<employee_benefitsUpdateManyMutationInput, employee_benefitsUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type employee_benefitsScalarWhereInput = {
    AND?: employee_benefitsScalarWhereInput | employee_benefitsScalarWhereInput[]
    OR?: employee_benefitsScalarWhereInput[]
    NOT?: employee_benefitsScalarWhereInput | employee_benefitsScalarWhereInput[]
    benefit_id?: IntFilter<"employee_benefits"> | number
    employee_id?: IntNullableFilter<"employee_benefits"> | number | null
    health_insurance_plan?: StringFilter<"employee_benefits"> | string
    health_insurance_cost?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFilter<"employee_benefits"> | number
    sick_leave_days?: IntFilter<"employee_benefits"> | number
    tuition_reimbursement?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string
    dental_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    vision_coverage?: BoolNullableFilter<"employee_benefits"> | boolean | null
    wellness_stipend?: DecimalNullableFilter<"employee_benefits"> | Decimal | DecimalJsLike | number | string | null
  }

  export type salesUpsertWithWhereUniqueWithoutEmployeesInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutEmployeesInput, salesUncheckedUpdateWithoutEmployeesInput>
    create: XOR<salesCreateWithoutEmployeesInput, salesUncheckedCreateWithoutEmployeesInput>
  }

  export type salesUpdateWithWhereUniqueWithoutEmployeesInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutEmployeesInput, salesUncheckedUpdateWithoutEmployeesInput>
  }

  export type salesUpdateManyWithWhereWithoutEmployeesInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutEmployeesInput>
  }

  export type salesScalarWhereInput = {
    AND?: salesScalarWhereInput | salesScalarWhereInput[]
    OR?: salesScalarWhereInput[]
    NOT?: salesScalarWhereInput | salesScalarWhereInput[]
    sale_id?: IntFilter<"sales"> | number
    employee_id?: IntNullableFilter<"sales"> | number | null
    order_id?: IntNullableFilter<"sales"> | number | null
    product_id?: IntNullableFilter<"sales"> | number | null
    quantity?: IntFilter<"sales"> | number
    unit_price?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFilter<"sales"> | Date | string
    commission_amount?: DecimalNullableFilter<"sales"> | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFilter<"sales"> | Decimal | DecimalJsLike | number | string
    customer_rating?: IntNullableFilter<"sales"> | number | null
  }

  export type salesCreateWithoutInventoryInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
    employees?: employeesCreateNestedOneWithoutSalesInput
    orders?: ordersCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutInventoryInput = {
    sale_id?: number
    employee_id?: number | null
    order_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesCreateOrConnectWithoutInventoryInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
  }

  export type salesCreateManyInventoryInputEnvelope = {
    data: salesCreateManyInventoryInput | salesCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type salesUpsertWithWhereUniqueWithoutInventoryInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutInventoryInput, salesUncheckedUpdateWithoutInventoryInput>
    create: XOR<salesCreateWithoutInventoryInput, salesUncheckedCreateWithoutInventoryInput>
  }

  export type salesUpdateWithWhereUniqueWithoutInventoryInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutInventoryInput, salesUncheckedUpdateWithoutInventoryInput>
  }

  export type salesUpdateManyWithWhereWithoutInventoryInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutInventoryInput>
  }

  export type customersCreateWithoutOrdersInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    registration_date: Date | string
    total_spent?: Decimal | DecimalJsLike | number | string | null
    loyalty_points?: number | null
    segment?: string | null
    last_purchase_date?: Date | string | null
  }

  export type customersUncheckedCreateWithoutOrdersInput = {
    customer_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    registration_date: Date | string
    total_spent?: Decimal | DecimalJsLike | number | string | null
    loyalty_points?: number | null
    segment?: string | null
    last_purchase_date?: Date | string | null
  }

  export type customersCreateOrConnectWithoutOrdersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
  }

  export type salesCreateWithoutOrdersInput = {
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
    employees?: employeesCreateNestedOneWithoutSalesInput
    inventory?: inventoryCreateNestedOneWithoutSalesInput
  }

  export type salesUncheckedCreateWithoutOrdersInput = {
    sale_id?: number
    employee_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesCreateOrConnectWithoutOrdersInput = {
    where: salesWhereUniqueInput
    create: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput>
  }

  export type salesCreateManyOrdersInputEnvelope = {
    data: salesCreateManyOrdersInput | salesCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type customersUpsertWithoutOrdersInput = {
    update: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type customersUpdateWithoutOrdersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type customersUncheckedUpdateWithoutOrdersInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    registration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_spent?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    loyalty_points?: NullableIntFieldUpdateOperationsInput | number | null
    segment?: NullableStringFieldUpdateOperationsInput | string | null
    last_purchase_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type salesUpsertWithWhereUniqueWithoutOrdersInput = {
    where: salesWhereUniqueInput
    update: XOR<salesUpdateWithoutOrdersInput, salesUncheckedUpdateWithoutOrdersInput>
    create: XOR<salesCreateWithoutOrdersInput, salesUncheckedCreateWithoutOrdersInput>
  }

  export type salesUpdateWithWhereUniqueWithoutOrdersInput = {
    where: salesWhereUniqueInput
    data: XOR<salesUpdateWithoutOrdersInput, salesUncheckedUpdateWithoutOrdersInput>
  }

  export type salesUpdateManyWithWhereWithoutOrdersInput = {
    where: salesScalarWhereInput
    data: XOR<salesUpdateManyMutationInput, salesUncheckedUpdateManyWithoutOrdersInput>
  }

  export type employeesCreateWithoutSalesInput = {
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsCreateNestedManyWithoutEmployeesInput
  }

  export type employeesUncheckedCreateWithoutSalesInput = {
    employee_id?: number
    first_name: string
    last_name: string
    email: string
    department: string
    position: string
    hire_date: Date | string
    salary: Decimal | DecimalJsLike | number | string
    commission_pct?: Decimal | DecimalJsLike | number | string | null
    manager_id?: number | null
    performance_score?: Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUncheckedCreateNestedManyWithoutEmployeesInput
  }

  export type employeesCreateOrConnectWithoutSalesInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutSalesInput, employeesUncheckedCreateWithoutSalesInput>
  }

  export type ordersCreateWithoutSalesInput = {
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
    customers?: customersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutSalesInput = {
    order_id?: number
    customer_id?: number | null
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutSalesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutSalesInput, ordersUncheckedCreateWithoutSalesInput>
  }

  export type inventoryCreateWithoutSalesInput = {
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    reorder_level: number
    last_restock_date: Date | string
    profit_margin: Decimal | DecimalJsLike | number | string
  }

  export type inventoryUncheckedCreateWithoutSalesInput = {
    product_id?: number
    product_name: string
    category: string
    supplier: string
    stock_quantity: number
    cost_price: Decimal | DecimalJsLike | number | string
    selling_price: Decimal | DecimalJsLike | number | string
    reorder_level: number
    last_restock_date: Date | string
    profit_margin: Decimal | DecimalJsLike | number | string
  }

  export type inventoryCreateOrConnectWithoutSalesInput = {
    where: inventoryWhereUniqueInput
    create: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>
  }

  export type employeesUpsertWithoutSalesInput = {
    update: XOR<employeesUpdateWithoutSalesInput, employeesUncheckedUpdateWithoutSalesInput>
    create: XOR<employeesCreateWithoutSalesInput, employeesUncheckedCreateWithoutSalesInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutSalesInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutSalesInput, employeesUncheckedUpdateWithoutSalesInput>
  }

  export type employeesUpdateWithoutSalesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUpdateManyWithoutEmployeesNestedInput
  }

  export type employeesUncheckedUpdateWithoutSalesInput = {
    employee_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    commission_pct?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    performance_score?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    employee_benefits?: employee_benefitsUncheckedUpdateManyWithoutEmployeesNestedInput
  }

  export type ordersUpsertWithoutSalesInput = {
    update: XOR<ordersUpdateWithoutSalesInput, ordersUncheckedUpdateWithoutSalesInput>
    create: XOR<ordersCreateWithoutSalesInput, ordersUncheckedCreateWithoutSalesInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutSalesInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutSalesInput, ordersUncheckedUpdateWithoutSalesInput>
  }

  export type ordersUpdateWithoutSalesInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutSalesInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inventoryUpsertWithoutSalesInput = {
    update: XOR<inventoryUpdateWithoutSalesInput, inventoryUncheckedUpdateWithoutSalesInput>
    create: XOR<inventoryCreateWithoutSalesInput, inventoryUncheckedCreateWithoutSalesInput>
    where?: inventoryWhereInput
  }

  export type inventoryUpdateToOneWithWhereWithoutSalesInput = {
    where?: inventoryWhereInput
    data: XOR<inventoryUpdateWithoutSalesInput, inventoryUncheckedUpdateWithoutSalesInput>
  }

  export type inventoryUpdateWithoutSalesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type inventoryUncheckedUpdateWithoutSalesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    supplier?: StringFieldUpdateOperationsInput | string
    stock_quantity?: IntFieldUpdateOperationsInput | number
    cost_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    selling_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    reorder_level?: IntFieldUpdateOperationsInput | number
    last_restock_date?: DateTimeFieldUpdateOperationsInput | Date | string
    profit_margin?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateManyCustomersInput = {
    order_id?: number
    order_date: Date | string
    total_amount: Decimal | DecimalJsLike | number | string
    status: string
    payment_method: string
    shipping_address: string
    tracking_number?: string | null
    estimated_delivery?: Date | string | null
  }

  export type ordersUpdateWithoutCustomersInput = {
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sales?: salesUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: StringFieldUpdateOperationsInput | string
    payment_method?: StringFieldUpdateOperationsInput | string
    shipping_address?: StringFieldUpdateOperationsInput | string
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_delivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type employee_benefitsCreateManyEmployeesInput = {
    benefit_id?: number
    health_insurance_plan: string
    health_insurance_cost: Decimal | DecimalJsLike | number | string
    retirement_contribution_pct: Decimal | DecimalJsLike | number | string
    paid_time_off_days: number
    sick_leave_days: number
    tuition_reimbursement?: Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage: Decimal | DecimalJsLike | number | string
    dental_coverage?: boolean | null
    vision_coverage?: boolean | null
    wellness_stipend?: Decimal | DecimalJsLike | number | string | null
  }

  export type salesCreateManyEmployeesInput = {
    sale_id?: number
    order_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type employee_benefitsUpdateWithoutEmployeesInput = {
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUncheckedUpdateWithoutEmployeesInput = {
    benefit_id?: IntFieldUpdateOperationsInput | number
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type employee_benefitsUncheckedUpdateManyWithoutEmployeesInput = {
    benefit_id?: IntFieldUpdateOperationsInput | number
    health_insurance_plan?: StringFieldUpdateOperationsInput | string
    health_insurance_cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    retirement_contribution_pct?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paid_time_off_days?: IntFieldUpdateOperationsInput | number
    sick_leave_days?: IntFieldUpdateOperationsInput | number
    tuition_reimbursement?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    life_insurance_coverage?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dental_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    vision_coverage?: NullableBoolFieldUpdateOperationsInput | boolean | null
    wellness_stipend?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type salesUpdateWithoutEmployeesInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUpdateOneWithoutSalesNestedInput
    inventory?: inventoryUpdateOneWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutEmployeesInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesUncheckedUpdateManyWithoutEmployeesInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesCreateManyInventoryInput = {
    sale_id?: number
    employee_id?: number | null
    order_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesUpdateWithoutInventoryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
    employees?: employeesUpdateOneWithoutSalesNestedInput
    orders?: ordersUpdateOneWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutInventoryInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesUncheckedUpdateManyWithoutInventoryInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesCreateManyOrdersInput = {
    sale_id?: number
    employee_id?: number | null
    product_id?: number | null
    quantity: number
    unit_price: Decimal | DecimalJsLike | number | string
    sale_date: Date | string
    commission_amount?: Decimal | DecimalJsLike | number | string | null
    profit: Decimal | DecimalJsLike | number | string
    customer_rating?: number | null
  }

  export type salesUpdateWithoutOrdersInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
    employees?: employeesUpdateOneWithoutSalesNestedInput
    inventory?: inventoryUpdateOneWithoutSalesNestedInput
  }

  export type salesUncheckedUpdateWithoutOrdersInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type salesUncheckedUpdateManyWithoutOrdersInput = {
    sale_id?: IntFieldUpdateOperationsInput | number
    employee_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    sale_date?: DateTimeFieldUpdateOperationsInput | Date | string
    commission_amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    profit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_rating?: NullableIntFieldUpdateOperationsInput | number | null
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