
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
 * Model DatabaseMetadata
 * 
 */
export type DatabaseMetadata = $Result.DefaultSelection<Prisma.$DatabaseMetadataPayload>
/**
 * Model ColumnMetadata
 * 
 */
export type ColumnMetadata = $Result.DefaultSelection<Prisma.$ColumnMetadataPayload>
/**
 * Model QueryHistory
 * 
 */
export type QueryHistory = $Result.DefaultSelection<Prisma.$QueryHistoryPayload>
/**
 * Model Visualization
 * 
 */
export type Visualization = $Result.DefaultSelection<Prisma.$VisualizationPayload>
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
 * Model UserSettings
 * 
 */
export type UserSettings = $Result.DefaultSelection<Prisma.$UserSettingsPayload>
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
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

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
   * `prisma.databaseMetadata`: Exposes CRUD operations for the **DatabaseMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseMetadata
    * const databaseMetadata = await prisma.databaseMetadata.findMany()
    * ```
    */
  get databaseMetadata(): Prisma.DatabaseMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.columnMetadata`: Exposes CRUD operations for the **ColumnMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColumnMetadata
    * const columnMetadata = await prisma.columnMetadata.findMany()
    * ```
    */
  get columnMetadata(): Prisma.ColumnMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.queryHistory`: Exposes CRUD operations for the **QueryHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QueryHistories
    * const queryHistories = await prisma.queryHistory.findMany()
    * ```
    */
  get queryHistory(): Prisma.QueryHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visualization`: Exposes CRUD operations for the **Visualization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visualizations
    * const visualizations = await prisma.visualization.findMany()
    * ```
    */
  get visualization(): Prisma.VisualizationDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.userSettings`: Exposes CRUD operations for the **UserSettings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSettings
    * const userSettings = await prisma.userSettings.findMany()
    * ```
    */
  get userSettings(): Prisma.UserSettingsDelegate<ExtArgs, ClientOptions>;

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
    User: 'User',
    DatabaseMetadata: 'DatabaseMetadata',
    ColumnMetadata: 'ColumnMetadata',
    QueryHistory: 'QueryHistory',
    Visualization: 'Visualization',
    Dashboard: 'Dashboard',
    DashboardWidget: 'DashboardWidget',
    UserSettings: 'UserSettings',
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
      modelProps: "user" | "databaseMetadata" | "columnMetadata" | "queryHistory" | "visualization" | "dashboard" | "dashboardWidget" | "userSettings" | "customers" | "employee_benefits" | "employees" | "inventory" | "orders" | "sales"
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
      DatabaseMetadata: {
        payload: Prisma.$DatabaseMetadataPayload<ExtArgs>
        fields: Prisma.DatabaseMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatabaseMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatabaseMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          findFirst: {
            args: Prisma.DatabaseMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatabaseMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          findMany: {
            args: Prisma.DatabaseMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>[]
          }
          create: {
            args: Prisma.DatabaseMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          createMany: {
            args: Prisma.DatabaseMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatabaseMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>[]
          }
          delete: {
            args: Prisma.DatabaseMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          update: {
            args: Prisma.DatabaseMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          deleteMany: {
            args: Prisma.DatabaseMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatabaseMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatabaseMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>[]
          }
          upsert: {
            args: Prisma.DatabaseMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseMetadataPayload>
          }
          aggregate: {
            args: Prisma.DatabaseMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatabaseMetadata>
          }
          groupBy: {
            args: Prisma.DatabaseMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatabaseMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatabaseMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<DatabaseMetadataCountAggregateOutputType> | number
          }
        }
      }
      ColumnMetadata: {
        payload: Prisma.$ColumnMetadataPayload<ExtArgs>
        fields: Prisma.ColumnMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          findFirst: {
            args: Prisma.ColumnMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          findMany: {
            args: Prisma.ColumnMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          create: {
            args: Prisma.ColumnMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          createMany: {
            args: Prisma.ColumnMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          delete: {
            args: Prisma.ColumnMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          update: {
            args: Prisma.ColumnMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ColumnMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>[]
          }
          upsert: {
            args: Prisma.ColumnMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnMetadataPayload>
          }
          aggregate: {
            args: Prisma.ColumnMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumnMetadata>
          }
          groupBy: {
            args: Prisma.ColumnMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnMetadataCountAggregateOutputType> | number
          }
        }
      }
      QueryHistory: {
        payload: Prisma.$QueryHistoryPayload<ExtArgs>
        fields: Prisma.QueryHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QueryHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QueryHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          findFirst: {
            args: Prisma.QueryHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QueryHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          findMany: {
            args: Prisma.QueryHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          create: {
            args: Prisma.QueryHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          createMany: {
            args: Prisma.QueryHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QueryHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          delete: {
            args: Prisma.QueryHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          update: {
            args: Prisma.QueryHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          deleteMany: {
            args: Prisma.QueryHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QueryHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QueryHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>[]
          }
          upsert: {
            args: Prisma.QueryHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QueryHistoryPayload>
          }
          aggregate: {
            args: Prisma.QueryHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQueryHistory>
          }
          groupBy: {
            args: Prisma.QueryHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<QueryHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.QueryHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<QueryHistoryCountAggregateOutputType> | number
          }
        }
      }
      Visualization: {
        payload: Prisma.$VisualizationPayload<ExtArgs>
        fields: Prisma.VisualizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisualizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisualizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          findFirst: {
            args: Prisma.VisualizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisualizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          findMany: {
            args: Prisma.VisualizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>[]
          }
          create: {
            args: Prisma.VisualizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          createMany: {
            args: Prisma.VisualizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VisualizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>[]
          }
          delete: {
            args: Prisma.VisualizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          update: {
            args: Prisma.VisualizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          deleteMany: {
            args: Prisma.VisualizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisualizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VisualizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>[]
          }
          upsert: {
            args: Prisma.VisualizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisualizationPayload>
          }
          aggregate: {
            args: Prisma.VisualizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisualization>
          }
          groupBy: {
            args: Prisma.VisualizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisualizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisualizationCountArgs<ExtArgs>
            result: $Utils.Optional<VisualizationCountAggregateOutputType> | number
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
      UserSettings: {
        payload: Prisma.$UserSettingsPayload<ExtArgs>
        fields: Prisma.UserSettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findFirst: {
            args: Prisma.UserSettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          findMany: {
            args: Prisma.UserSettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          create: {
            args: Prisma.UserSettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          createMany: {
            args: Prisma.UserSettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          delete: {
            args: Prisma.UserSettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          update: {
            args: Prisma.UserSettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          deleteMany: {
            args: Prisma.UserSettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>[]
          }
          upsert: {
            args: Prisma.UserSettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSettingsPayload>
          }
          aggregate: {
            args: Prisma.UserSettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSettings>
          }
          groupBy: {
            args: Prisma.UserSettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSettingsCountArgs<ExtArgs>
            result: $Utils.Optional<UserSettingsCountAggregateOutputType> | number
          }
        }
      }
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
    user?: UserOmit
    databaseMetadata?: DatabaseMetadataOmit
    columnMetadata?: ColumnMetadataOmit
    queryHistory?: QueryHistoryOmit
    visualization?: VisualizationOmit
    dashboard?: DashboardOmit
    dashboardWidget?: DashboardWidgetOmit
    userSettings?: UserSettingsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    queryHistory: number
    dashboards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queryHistory?: boolean | UserCountOutputTypeCountQueryHistoryArgs
    dashboards?: boolean | UserCountOutputTypeCountDashboardsArgs
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
  export type UserCountOutputTypeCountQueryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
  }


  /**
   * Count Type DatabaseMetadataCountOutputType
   */

  export type DatabaseMetadataCountOutputType = {
    columns: number
  }

  export type DatabaseMetadataCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | DatabaseMetadataCountOutputTypeCountColumnsArgs
  }

  // Custom InputTypes
  /**
   * DatabaseMetadataCountOutputType without action
   */
  export type DatabaseMetadataCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadataCountOutputType
     */
    select?: DatabaseMetadataCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatabaseMetadataCountOutputType without action
   */
  export type DatabaseMetadataCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMetadataWhereInput
  }


  /**
   * Count Type DashboardCountOutputType
   */

  export type DashboardCountOutputType = {
    widgets: number
  }

  export type DashboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgets?: boolean | DashboardCountOutputTypeCountWidgetsArgs
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
  export type DashboardCountOutputTypeCountWidgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWidgetWhereInput
  }


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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    name: string | null
    email: string | null
    password: string | null
    profilePicture: string | null
    createdAt: Date | null
    updatedAt: Date | null
    role: $Enums.UserRole | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    password: number
    profilePicture: number
    createdAt: number
    updatedAt: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    password?: true
    profilePicture?: true
    createdAt?: true
    updatedAt?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: number
    name: string
    email: string | null
    password: string
    profilePicture: string | null
    createdAt: Date
    updatedAt: Date
    role: $Enums.UserRole
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
    queryHistory?: boolean | User$queryHistoryArgs<ExtArgs>
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profilePicture?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "password" | "profilePicture" | "createdAt" | "updatedAt" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queryHistory?: boolean | User$queryHistoryArgs<ExtArgs>
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    settings?: boolean | User$settingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      queryHistory: Prisma.$QueryHistoryPayload<ExtArgs>[]
      dashboards: Prisma.$DashboardPayload<ExtArgs>[]
      settings: Prisma.$UserSettingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      name: string
      email: string | null
      password: string
      profilePicture: string | null
      createdAt: Date
      updatedAt: Date
      role: $Enums.UserRole
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
    queryHistory<T extends User$queryHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$queryHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dashboards<T extends User$dashboardsArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends User$settingsArgs<ExtArgs> = {}>(args?: Subset<T, User$settingsArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User.queryHistory
   */
  export type User$queryHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    where?: QueryHistoryWhereInput
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    cursor?: QueryHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
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
   * User.settings
   */
  export type User$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    where?: UserSettingsWhereInput
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
   * Model DatabaseMetadata
   */

  export type AggregateDatabaseMetadata = {
    _count: DatabaseMetadataCountAggregateOutputType | null
    _min: DatabaseMetadataMinAggregateOutputType | null
    _max: DatabaseMetadataMaxAggregateOutputType | null
  }

  export type DatabaseMetadataMinAggregateOutputType = {
    id: string | null
    tableName: string | null
    description: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatabaseMetadataMaxAggregateOutputType = {
    id: string | null
    tableName: string | null
    description: string | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DatabaseMetadataCountAggregateOutputType = {
    id: number
    tableName: number
    description: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DatabaseMetadataMinAggregateInputType = {
    id?: true
    tableName?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatabaseMetadataMaxAggregateInputType = {
    id?: true
    tableName?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DatabaseMetadataCountAggregateInputType = {
    id?: true
    tableName?: true
    description?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DatabaseMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatabaseMetadata to aggregate.
     */
    where?: DatabaseMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMetadata to fetch.
     */
    orderBy?: DatabaseMetadataOrderByWithRelationInput | DatabaseMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatabaseMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseMetadata
    **/
    _count?: true | DatabaseMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseMetadataMaxAggregateInputType
  }

  export type GetDatabaseMetadataAggregateType<T extends DatabaseMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseMetadata[P]>
      : GetScalarType<T[P], AggregateDatabaseMetadata[P]>
  }




  export type DatabaseMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatabaseMetadataWhereInput
    orderBy?: DatabaseMetadataOrderByWithAggregationInput | DatabaseMetadataOrderByWithAggregationInput[]
    by: DatabaseMetadataScalarFieldEnum[] | DatabaseMetadataScalarFieldEnum
    having?: DatabaseMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseMetadataCountAggregateInputType | true
    _min?: DatabaseMetadataMinAggregateInputType
    _max?: DatabaseMetadataMaxAggregateInputType
  }

  export type DatabaseMetadataGroupByOutputType = {
    id: string
    tableName: string
    description: string | null
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: DatabaseMetadataCountAggregateOutputType | null
    _min: DatabaseMetadataMinAggregateOutputType | null
    _max: DatabaseMetadataMaxAggregateOutputType | null
  }

  type GetDatabaseMetadataGroupByPayload<T extends DatabaseMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatabaseMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseMetadataGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    columns?: boolean | DatabaseMetadata$columnsArgs<ExtArgs>
    _count?: boolean | DatabaseMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["databaseMetadata"]>

  export type DatabaseMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["databaseMetadata"]>

  export type DatabaseMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["databaseMetadata"]>

  export type DatabaseMetadataSelectScalar = {
    id?: boolean
    tableName?: boolean
    description?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DatabaseMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableName" | "description" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["databaseMetadata"]>
  export type DatabaseMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | DatabaseMetadata$columnsArgs<ExtArgs>
    _count?: boolean | DatabaseMetadataCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatabaseMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DatabaseMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DatabaseMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatabaseMetadata"
    objects: {
      columns: Prisma.$ColumnMetadataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableName: string
      description: string | null
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["databaseMetadata"]>
    composites: {}
  }

  type DatabaseMetadataGetPayload<S extends boolean | null | undefined | DatabaseMetadataDefaultArgs> = $Result.GetResult<Prisma.$DatabaseMetadataPayload, S>

  type DatabaseMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatabaseMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatabaseMetadataCountAggregateInputType | true
    }

  export interface DatabaseMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatabaseMetadata'], meta: { name: 'DatabaseMetadata' } }
    /**
     * Find zero or one DatabaseMetadata that matches the filter.
     * @param {DatabaseMetadataFindUniqueArgs} args - Arguments to find a DatabaseMetadata
     * @example
     * // Get one DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatabaseMetadataFindUniqueArgs>(args: SelectSubset<T, DatabaseMetadataFindUniqueArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatabaseMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatabaseMetadataFindUniqueOrThrowArgs} args - Arguments to find a DatabaseMetadata
     * @example
     * // Get one DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatabaseMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, DatabaseMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatabaseMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataFindFirstArgs} args - Arguments to find a DatabaseMetadata
     * @example
     * // Get one DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatabaseMetadataFindFirstArgs>(args?: SelectSubset<T, DatabaseMetadataFindFirstArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatabaseMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataFindFirstOrThrowArgs} args - Arguments to find a DatabaseMetadata
     * @example
     * // Get one DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatabaseMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, DatabaseMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatabaseMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findMany()
     * 
     * // Get first 10 DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseMetadataWithIdOnly = await prisma.databaseMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatabaseMetadataFindManyArgs>(args?: SelectSubset<T, DatabaseMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatabaseMetadata.
     * @param {DatabaseMetadataCreateArgs} args - Arguments to create a DatabaseMetadata.
     * @example
     * // Create one DatabaseMetadata
     * const DatabaseMetadata = await prisma.databaseMetadata.create({
     *   data: {
     *     // ... data to create a DatabaseMetadata
     *   }
     * })
     * 
     */
    create<T extends DatabaseMetadataCreateArgs>(args: SelectSubset<T, DatabaseMetadataCreateArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatabaseMetadata.
     * @param {DatabaseMetadataCreateManyArgs} args - Arguments to create many DatabaseMetadata.
     * @example
     * // Create many DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatabaseMetadataCreateManyArgs>(args?: SelectSubset<T, DatabaseMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatabaseMetadata and returns the data saved in the database.
     * @param {DatabaseMetadataCreateManyAndReturnArgs} args - Arguments to create many DatabaseMetadata.
     * @example
     * // Create many DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatabaseMetadata and only return the `id`
     * const databaseMetadataWithIdOnly = await prisma.databaseMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatabaseMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, DatabaseMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatabaseMetadata.
     * @param {DatabaseMetadataDeleteArgs} args - Arguments to delete one DatabaseMetadata.
     * @example
     * // Delete one DatabaseMetadata
     * const DatabaseMetadata = await prisma.databaseMetadata.delete({
     *   where: {
     *     // ... filter to delete one DatabaseMetadata
     *   }
     * })
     * 
     */
    delete<T extends DatabaseMetadataDeleteArgs>(args: SelectSubset<T, DatabaseMetadataDeleteArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatabaseMetadata.
     * @param {DatabaseMetadataUpdateArgs} args - Arguments to update one DatabaseMetadata.
     * @example
     * // Update one DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatabaseMetadataUpdateArgs>(args: SelectSubset<T, DatabaseMetadataUpdateArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatabaseMetadata.
     * @param {DatabaseMetadataDeleteManyArgs} args - Arguments to filter DatabaseMetadata to delete.
     * @example
     * // Delete a few DatabaseMetadata
     * const { count } = await prisma.databaseMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatabaseMetadataDeleteManyArgs>(args?: SelectSubset<T, DatabaseMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatabaseMetadataUpdateManyArgs>(args: SelectSubset<T, DatabaseMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseMetadata and returns the data updated in the database.
     * @param {DatabaseMetadataUpdateManyAndReturnArgs} args - Arguments to update many DatabaseMetadata.
     * @example
     * // Update many DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatabaseMetadata and only return the `id`
     * const databaseMetadataWithIdOnly = await prisma.databaseMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends DatabaseMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, DatabaseMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatabaseMetadata.
     * @param {DatabaseMetadataUpsertArgs} args - Arguments to update or create a DatabaseMetadata.
     * @example
     * // Update or create a DatabaseMetadata
     * const databaseMetadata = await prisma.databaseMetadata.upsert({
     *   create: {
     *     // ... data to create a DatabaseMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseMetadata we want to update
     *   }
     * })
     */
    upsert<T extends DatabaseMetadataUpsertArgs>(args: SelectSubset<T, DatabaseMetadataUpsertArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatabaseMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataCountArgs} args - Arguments to filter DatabaseMetadata to count.
     * @example
     * // Count the number of DatabaseMetadata
     * const count = await prisma.databaseMetadata.count({
     *   where: {
     *     // ... the filter for the DatabaseMetadata we want to count
     *   }
     * })
    **/
    count<T extends DatabaseMetadataCountArgs>(
      args?: Subset<T, DatabaseMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DatabaseMetadataAggregateArgs>(args: Subset<T, DatabaseMetadataAggregateArgs>): Prisma.PrismaPromise<GetDatabaseMetadataAggregateType<T>>

    /**
     * Group by DatabaseMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseMetadataGroupByArgs} args - Group by arguments.
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
      T extends DatabaseMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseMetadataGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DatabaseMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatabaseMetadata model
   */
  readonly fields: DatabaseMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatabaseMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    columns<T extends DatabaseMetadata$columnsArgs<ExtArgs> = {}>(args?: Subset<T, DatabaseMetadata$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DatabaseMetadata model
   */ 
  interface DatabaseMetadataFieldRefs {
    readonly id: FieldRef<"DatabaseMetadata", 'String'>
    readonly tableName: FieldRef<"DatabaseMetadata", 'String'>
    readonly description: FieldRef<"DatabaseMetadata", 'String'>
    readonly isVisible: FieldRef<"DatabaseMetadata", 'Boolean'>
    readonly createdAt: FieldRef<"DatabaseMetadata", 'DateTime'>
    readonly updatedAt: FieldRef<"DatabaseMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DatabaseMetadata findUnique
   */
  export type DatabaseMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter, which DatabaseMetadata to fetch.
     */
    where: DatabaseMetadataWhereUniqueInput
  }

  /**
   * DatabaseMetadata findUniqueOrThrow
   */
  export type DatabaseMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter, which DatabaseMetadata to fetch.
     */
    where: DatabaseMetadataWhereUniqueInput
  }

  /**
   * DatabaseMetadata findFirst
   */
  export type DatabaseMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter, which DatabaseMetadata to fetch.
     */
    where?: DatabaseMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMetadata to fetch.
     */
    orderBy?: DatabaseMetadataOrderByWithRelationInput | DatabaseMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseMetadata.
     */
    cursor?: DatabaseMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseMetadata.
     */
    distinct?: DatabaseMetadataScalarFieldEnum | DatabaseMetadataScalarFieldEnum[]
  }

  /**
   * DatabaseMetadata findFirstOrThrow
   */
  export type DatabaseMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter, which DatabaseMetadata to fetch.
     */
    where?: DatabaseMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMetadata to fetch.
     */
    orderBy?: DatabaseMetadataOrderByWithRelationInput | DatabaseMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseMetadata.
     */
    cursor?: DatabaseMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseMetadata.
     */
    distinct?: DatabaseMetadataScalarFieldEnum | DatabaseMetadataScalarFieldEnum[]
  }

  /**
   * DatabaseMetadata findMany
   */
  export type DatabaseMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter, which DatabaseMetadata to fetch.
     */
    where?: DatabaseMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseMetadata to fetch.
     */
    orderBy?: DatabaseMetadataOrderByWithRelationInput | DatabaseMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseMetadata.
     */
    cursor?: DatabaseMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseMetadata.
     */
    skip?: number
    distinct?: DatabaseMetadataScalarFieldEnum | DatabaseMetadataScalarFieldEnum[]
  }

  /**
   * DatabaseMetadata create
   */
  export type DatabaseMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a DatabaseMetadata.
     */
    data: XOR<DatabaseMetadataCreateInput, DatabaseMetadataUncheckedCreateInput>
  }

  /**
   * DatabaseMetadata createMany
   */
  export type DatabaseMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatabaseMetadata.
     */
    data: DatabaseMetadataCreateManyInput | DatabaseMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatabaseMetadata createManyAndReturn
   */
  export type DatabaseMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many DatabaseMetadata.
     */
    data: DatabaseMetadataCreateManyInput | DatabaseMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatabaseMetadata update
   */
  export type DatabaseMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a DatabaseMetadata.
     */
    data: XOR<DatabaseMetadataUpdateInput, DatabaseMetadataUncheckedUpdateInput>
    /**
     * Choose, which DatabaseMetadata to update.
     */
    where: DatabaseMetadataWhereUniqueInput
  }

  /**
   * DatabaseMetadata updateMany
   */
  export type DatabaseMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatabaseMetadata.
     */
    data: XOR<DatabaseMetadataUpdateManyMutationInput, DatabaseMetadataUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseMetadata to update
     */
    where?: DatabaseMetadataWhereInput
    /**
     * Limit how many DatabaseMetadata to update.
     */
    limit?: number
  }

  /**
   * DatabaseMetadata updateManyAndReturn
   */
  export type DatabaseMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * The data used to update DatabaseMetadata.
     */
    data: XOR<DatabaseMetadataUpdateManyMutationInput, DatabaseMetadataUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseMetadata to update
     */
    where?: DatabaseMetadataWhereInput
    /**
     * Limit how many DatabaseMetadata to update.
     */
    limit?: number
  }

  /**
   * DatabaseMetadata upsert
   */
  export type DatabaseMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the DatabaseMetadata to update in case it exists.
     */
    where: DatabaseMetadataWhereUniqueInput
    /**
     * In case the DatabaseMetadata found by the `where` argument doesn't exist, create a new DatabaseMetadata with this data.
     */
    create: XOR<DatabaseMetadataCreateInput, DatabaseMetadataUncheckedCreateInput>
    /**
     * In case the DatabaseMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatabaseMetadataUpdateInput, DatabaseMetadataUncheckedUpdateInput>
  }

  /**
   * DatabaseMetadata delete
   */
  export type DatabaseMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
    /**
     * Filter which DatabaseMetadata to delete.
     */
    where: DatabaseMetadataWhereUniqueInput
  }

  /**
   * DatabaseMetadata deleteMany
   */
  export type DatabaseMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatabaseMetadata to delete
     */
    where?: DatabaseMetadataWhereInput
    /**
     * Limit how many DatabaseMetadata to delete.
     */
    limit?: number
  }

  /**
   * DatabaseMetadata.columns
   */
  export type DatabaseMetadata$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    where?: ColumnMetadataWhereInput
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    cursor?: ColumnMetadataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * DatabaseMetadata without action
   */
  export type DatabaseMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseMetadata
     */
    select?: DatabaseMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseMetadata
     */
    omit?: DatabaseMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatabaseMetadataInclude<ExtArgs> | null
  }


  /**
   * Model ColumnMetadata
   */

  export type AggregateColumnMetadata = {
    _count: ColumnMetadataCountAggregateOutputType | null
    _min: ColumnMetadataMinAggregateOutputType | null
    _max: ColumnMetadataMaxAggregateOutputType | null
  }

  export type ColumnMetadataMinAggregateOutputType = {
    id: string | null
    databaseMetadataId: string | null
    columnName: string | null
    dataType: string | null
    description: string | null
    isIdentifier: boolean | null
    isSensitive: boolean | null
  }

  export type ColumnMetadataMaxAggregateOutputType = {
    id: string | null
    databaseMetadataId: string | null
    columnName: string | null
    dataType: string | null
    description: string | null
    isIdentifier: boolean | null
    isSensitive: boolean | null
  }

  export type ColumnMetadataCountAggregateOutputType = {
    id: number
    databaseMetadataId: number
    columnName: number
    dataType: number
    description: number
    isIdentifier: number
    isSensitive: number
    _all: number
  }


  export type ColumnMetadataMinAggregateInputType = {
    id?: true
    databaseMetadataId?: true
    columnName?: true
    dataType?: true
    description?: true
    isIdentifier?: true
    isSensitive?: true
  }

  export type ColumnMetadataMaxAggregateInputType = {
    id?: true
    databaseMetadataId?: true
    columnName?: true
    dataType?: true
    description?: true
    isIdentifier?: true
    isSensitive?: true
  }

  export type ColumnMetadataCountAggregateInputType = {
    id?: true
    databaseMetadataId?: true
    columnName?: true
    dataType?: true
    description?: true
    isIdentifier?: true
    isSensitive?: true
    _all?: true
  }

  export type ColumnMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMetadata to aggregate.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColumnMetadata
    **/
    _count?: true | ColumnMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMetadataMaxAggregateInputType
  }

  export type GetColumnMetadataAggregateType<T extends ColumnMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateColumnMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumnMetadata[P]>
      : GetScalarType<T[P], AggregateColumnMetadata[P]>
  }




  export type ColumnMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnMetadataWhereInput
    orderBy?: ColumnMetadataOrderByWithAggregationInput | ColumnMetadataOrderByWithAggregationInput[]
    by: ColumnMetadataScalarFieldEnum[] | ColumnMetadataScalarFieldEnum
    having?: ColumnMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnMetadataCountAggregateInputType | true
    _min?: ColumnMetadataMinAggregateInputType
    _max?: ColumnMetadataMaxAggregateInputType
  }

  export type ColumnMetadataGroupByOutputType = {
    id: string
    databaseMetadataId: string
    columnName: string
    dataType: string
    description: string | null
    isIdentifier: boolean
    isSensitive: boolean
    _count: ColumnMetadataCountAggregateOutputType | null
    _min: ColumnMetadataMinAggregateOutputType | null
    _max: ColumnMetadataMaxAggregateOutputType | null
  }

  type GetColumnMetadataGroupByPayload<T extends ColumnMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ColumnMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    databaseMetadataId?: boolean
    columnName?: boolean
    dataType?: boolean
    description?: boolean
    isIdentifier?: boolean
    isSensitive?: boolean
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    databaseMetadataId?: boolean
    columnName?: boolean
    dataType?: boolean
    description?: boolean
    isIdentifier?: boolean
    isSensitive?: boolean
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    databaseMetadataId?: boolean
    columnName?: boolean
    dataType?: boolean
    description?: boolean
    isIdentifier?: boolean
    isSensitive?: boolean
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["columnMetadata"]>

  export type ColumnMetadataSelectScalar = {
    id?: boolean
    databaseMetadataId?: boolean
    columnName?: boolean
    dataType?: boolean
    description?: boolean
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "databaseMetadataId" | "columnName" | "dataType" | "description" | "isIdentifier" | "isSensitive", ExtArgs["result"]["columnMetadata"]>
  export type ColumnMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }
  export type ColumnMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }
  export type ColumnMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    databaseMetadata?: boolean | DatabaseMetadataDefaultArgs<ExtArgs>
  }

  export type $ColumnMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColumnMetadata"
    objects: {
      databaseMetadata: Prisma.$DatabaseMetadataPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      databaseMetadataId: string
      columnName: string
      dataType: string
      description: string | null
      isIdentifier: boolean
      isSensitive: boolean
    }, ExtArgs["result"]["columnMetadata"]>
    composites: {}
  }

  type ColumnMetadataGetPayload<S extends boolean | null | undefined | ColumnMetadataDefaultArgs> = $Result.GetResult<Prisma.$ColumnMetadataPayload, S>

  type ColumnMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnMetadataCountAggregateInputType | true
    }

  export interface ColumnMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColumnMetadata'], meta: { name: 'ColumnMetadata' } }
    /**
     * Find zero or one ColumnMetadata that matches the filter.
     * @param {ColumnMetadataFindUniqueArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnMetadataFindUniqueArgs>(args: SelectSubset<T, ColumnMetadataFindUniqueArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColumnMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnMetadataFindUniqueOrThrowArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColumnMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindFirstArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnMetadataFindFirstArgs>(args?: SelectSubset<T, ColumnMetadataFindFirstArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColumnMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindFirstOrThrowArgs} args - Arguments to find a ColumnMetadata
     * @example
     * // Get one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColumnMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findMany()
     * 
     * // Get first 10 ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnMetadataFindManyArgs>(args?: SelectSubset<T, ColumnMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColumnMetadata.
     * @param {ColumnMetadataCreateArgs} args - Arguments to create a ColumnMetadata.
     * @example
     * // Create one ColumnMetadata
     * const ColumnMetadata = await prisma.columnMetadata.create({
     *   data: {
     *     // ... data to create a ColumnMetadata
     *   }
     * })
     * 
     */
    create<T extends ColumnMetadataCreateArgs>(args: SelectSubset<T, ColumnMetadataCreateArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColumnMetadata.
     * @param {ColumnMetadataCreateManyArgs} args - Arguments to create many ColumnMetadata.
     * @example
     * // Create many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnMetadataCreateManyArgs>(args?: SelectSubset<T, ColumnMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColumnMetadata and returns the data saved in the database.
     * @param {ColumnMetadataCreateManyAndReturnArgs} args - Arguments to create many ColumnMetadata.
     * @example
     * // Create many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColumnMetadata and only return the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColumnMetadata.
     * @param {ColumnMetadataDeleteArgs} args - Arguments to delete one ColumnMetadata.
     * @example
     * // Delete one ColumnMetadata
     * const ColumnMetadata = await prisma.columnMetadata.delete({
     *   where: {
     *     // ... filter to delete one ColumnMetadata
     *   }
     * })
     * 
     */
    delete<T extends ColumnMetadataDeleteArgs>(args: SelectSubset<T, ColumnMetadataDeleteArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColumnMetadata.
     * @param {ColumnMetadataUpdateArgs} args - Arguments to update one ColumnMetadata.
     * @example
     * // Update one ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnMetadataUpdateArgs>(args: SelectSubset<T, ColumnMetadataUpdateArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColumnMetadata.
     * @param {ColumnMetadataDeleteManyArgs} args - Arguments to filter ColumnMetadata to delete.
     * @example
     * // Delete a few ColumnMetadata
     * const { count } = await prisma.columnMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnMetadataDeleteManyArgs>(args?: SelectSubset<T, ColumnMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnMetadataUpdateManyArgs>(args: SelectSubset<T, ColumnMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColumnMetadata and returns the data updated in the database.
     * @param {ColumnMetadataUpdateManyAndReturnArgs} args - Arguments to update many ColumnMetadata.
     * @example
     * // Update many ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColumnMetadata and only return the `id`
     * const columnMetadataWithIdOnly = await prisma.columnMetadata.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColumnMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColumnMetadata.
     * @param {ColumnMetadataUpsertArgs} args - Arguments to update or create a ColumnMetadata.
     * @example
     * // Update or create a ColumnMetadata
     * const columnMetadata = await prisma.columnMetadata.upsert({
     *   create: {
     *     // ... data to create a ColumnMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColumnMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ColumnMetadataUpsertArgs>(args: SelectSubset<T, ColumnMetadataUpsertArgs<ExtArgs>>): Prisma__ColumnMetadataClient<$Result.GetResult<Prisma.$ColumnMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataCountArgs} args - Arguments to filter ColumnMetadata to count.
     * @example
     * // Count the number of ColumnMetadata
     * const count = await prisma.columnMetadata.count({
     *   where: {
     *     // ... the filter for the ColumnMetadata we want to count
     *   }
     * })
    **/
    count<T extends ColumnMetadataCountArgs>(
      args?: Subset<T, ColumnMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnMetadataAggregateArgs>(args: Subset<T, ColumnMetadataAggregateArgs>): Prisma.PrismaPromise<GetColumnMetadataAggregateType<T>>

    /**
     * Group by ColumnMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnMetadataGroupByArgs} args - Group by arguments.
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
      T extends ColumnMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ColumnMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ColumnMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColumnMetadata model
   */
  readonly fields: ColumnMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColumnMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    databaseMetadata<T extends DatabaseMetadataDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatabaseMetadataDefaultArgs<ExtArgs>>): Prisma__DatabaseMetadataClient<$Result.GetResult<Prisma.$DatabaseMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ColumnMetadata model
   */ 
  interface ColumnMetadataFieldRefs {
    readonly id: FieldRef<"ColumnMetadata", 'String'>
    readonly databaseMetadataId: FieldRef<"ColumnMetadata", 'String'>
    readonly columnName: FieldRef<"ColumnMetadata", 'String'>
    readonly dataType: FieldRef<"ColumnMetadata", 'String'>
    readonly description: FieldRef<"ColumnMetadata", 'String'>
    readonly isIdentifier: FieldRef<"ColumnMetadata", 'Boolean'>
    readonly isSensitive: FieldRef<"ColumnMetadata", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ColumnMetadata findUnique
   */
  export type ColumnMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata findUniqueOrThrow
   */
  export type ColumnMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata findFirst
   */
  export type ColumnMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMetadata.
     */
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata findFirstOrThrow
   */
  export type ColumnMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColumnMetadata.
     */
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata findMany
   */
  export type ColumnMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter, which ColumnMetadata to fetch.
     */
    where?: ColumnMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColumnMetadata to fetch.
     */
    orderBy?: ColumnMetadataOrderByWithRelationInput | ColumnMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColumnMetadata.
     */
    cursor?: ColumnMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColumnMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColumnMetadata.
     */
    skip?: number
    distinct?: ColumnMetadataScalarFieldEnum | ColumnMetadataScalarFieldEnum[]
  }

  /**
   * ColumnMetadata create
   */
  export type ColumnMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a ColumnMetadata.
     */
    data: XOR<ColumnMetadataCreateInput, ColumnMetadataUncheckedCreateInput>
  }

  /**
   * ColumnMetadata createMany
   */
  export type ColumnMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColumnMetadata.
     */
    data: ColumnMetadataCreateManyInput | ColumnMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ColumnMetadata createManyAndReturn
   */
  export type ColumnMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many ColumnMetadata.
     */
    data: ColumnMetadataCreateManyInput | ColumnMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColumnMetadata update
   */
  export type ColumnMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateInput, ColumnMetadataUncheckedUpdateInput>
    /**
     * Choose, which ColumnMetadata to update.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata updateMany
   */
  export type ColumnMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ColumnMetadata to update
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to update.
     */
    limit?: number
  }

  /**
   * ColumnMetadata updateManyAndReturn
   */
  export type ColumnMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * The data used to update ColumnMetadata.
     */
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ColumnMetadata to update
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColumnMetadata upsert
   */
  export type ColumnMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the ColumnMetadata to update in case it exists.
     */
    where: ColumnMetadataWhereUniqueInput
    /**
     * In case the ColumnMetadata found by the `where` argument doesn't exist, create a new ColumnMetadata with this data.
     */
    create: XOR<ColumnMetadataCreateInput, ColumnMetadataUncheckedCreateInput>
    /**
     * In case the ColumnMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnMetadataUpdateInput, ColumnMetadataUncheckedUpdateInput>
  }

  /**
   * ColumnMetadata delete
   */
  export type ColumnMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
    /**
     * Filter which ColumnMetadata to delete.
     */
    where: ColumnMetadataWhereUniqueInput
  }

  /**
   * ColumnMetadata deleteMany
   */
  export type ColumnMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColumnMetadata to delete
     */
    where?: ColumnMetadataWhereInput
    /**
     * Limit how many ColumnMetadata to delete.
     */
    limit?: number
  }

  /**
   * ColumnMetadata without action
   */
  export type ColumnMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnMetadata
     */
    select?: ColumnMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColumnMetadata
     */
    omit?: ColumnMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnMetadataInclude<ExtArgs> | null
  }


  /**
   * Model QueryHistory
   */

  export type AggregateQueryHistory = {
    _count: QueryHistoryCountAggregateOutputType | null
    _avg: QueryHistoryAvgAggregateOutputType | null
    _sum: QueryHistorySumAggregateOutputType | null
    _min: QueryHistoryMinAggregateOutputType | null
    _max: QueryHistoryMaxAggregateOutputType | null
  }

  export type QueryHistoryAvgAggregateOutputType = {
    executionTime: number | null
  }

  export type QueryHistorySumAggregateOutputType = {
    executionTime: number | null
  }

  export type QueryHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userQuery: string | null
    sqlQuery: string | null
    executionTime: number | null
    successful: boolean | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type QueryHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userQuery: string | null
    sqlQuery: string | null
    executionTime: number | null
    successful: boolean | null
    errorMessage: string | null
    createdAt: Date | null
  }

  export type QueryHistoryCountAggregateOutputType = {
    id: number
    userId: number
    userQuery: number
    sqlQuery: number
    relatedQueries: number
    results: number
    executionTime: number
    successful: number
    errorMessage: number
    createdAt: number
    _all: number
  }


  export type QueryHistoryAvgAggregateInputType = {
    executionTime?: true
  }

  export type QueryHistorySumAggregateInputType = {
    executionTime?: true
  }

  export type QueryHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    sqlQuery?: true
    executionTime?: true
    successful?: true
    errorMessage?: true
    createdAt?: true
  }

  export type QueryHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    sqlQuery?: true
    executionTime?: true
    successful?: true
    errorMessage?: true
    createdAt?: true
  }

  export type QueryHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    userQuery?: true
    sqlQuery?: true
    relatedQueries?: true
    results?: true
    executionTime?: true
    successful?: true
    errorMessage?: true
    createdAt?: true
    _all?: true
  }

  export type QueryHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryHistory to aggregate.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QueryHistories
    **/
    _count?: true | QueryHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QueryHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QueryHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QueryHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QueryHistoryMaxAggregateInputType
  }

  export type GetQueryHistoryAggregateType<T extends QueryHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateQueryHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQueryHistory[P]>
      : GetScalarType<T[P], AggregateQueryHistory[P]>
  }




  export type QueryHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QueryHistoryWhereInput
    orderBy?: QueryHistoryOrderByWithAggregationInput | QueryHistoryOrderByWithAggregationInput[]
    by: QueryHistoryScalarFieldEnum[] | QueryHistoryScalarFieldEnum
    having?: QueryHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QueryHistoryCountAggregateInputType | true
    _avg?: QueryHistoryAvgAggregateInputType
    _sum?: QueryHistorySumAggregateInputType
    _min?: QueryHistoryMinAggregateInputType
    _max?: QueryHistoryMaxAggregateInputType
  }

  export type QueryHistoryGroupByOutputType = {
    id: string
    userId: string
    userQuery: string
    sqlQuery: string
    relatedQueries: JsonValue | null
    results: JsonValue | null
    executionTime: number | null
    successful: boolean
    errorMessage: string | null
    createdAt: Date
    _count: QueryHistoryCountAggregateOutputType | null
    _avg: QueryHistoryAvgAggregateOutputType | null
    _sum: QueryHistorySumAggregateOutputType | null
    _min: QueryHistoryMinAggregateOutputType | null
    _max: QueryHistoryMaxAggregateOutputType | null
  }

  type GetQueryHistoryGroupByPayload<T extends QueryHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QueryHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QueryHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QueryHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], QueryHistoryGroupByOutputType[P]>
        }
      >
    >


  export type QueryHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    sqlQuery?: boolean
    relatedQueries?: boolean
    results?: boolean
    executionTime?: boolean
    successful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    visualization?: boolean | QueryHistory$visualizationArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    sqlQuery?: boolean
    relatedQueries?: boolean
    results?: boolean
    executionTime?: boolean
    successful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    sqlQuery?: boolean
    relatedQueries?: boolean
    results?: boolean
    executionTime?: boolean
    successful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["queryHistory"]>

  export type QueryHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    userQuery?: boolean
    sqlQuery?: boolean
    relatedQueries?: boolean
    results?: boolean
    executionTime?: boolean
    successful?: boolean
    errorMessage?: boolean
    createdAt?: boolean
  }

  export type QueryHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userQuery" | "sqlQuery" | "relatedQueries" | "results" | "executionTime" | "successful" | "errorMessage" | "createdAt", ExtArgs["result"]["queryHistory"]>
  export type QueryHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    visualization?: boolean | QueryHistory$visualizationArgs<ExtArgs>
  }
  export type QueryHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QueryHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QueryHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QueryHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      visualization: Prisma.$VisualizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userQuery: string
      sqlQuery: string
      relatedQueries: Prisma.JsonValue | null
      results: Prisma.JsonValue | null
      executionTime: number | null
      successful: boolean
      errorMessage: string | null
      createdAt: Date
    }, ExtArgs["result"]["queryHistory"]>
    composites: {}
  }

  type QueryHistoryGetPayload<S extends boolean | null | undefined | QueryHistoryDefaultArgs> = $Result.GetResult<Prisma.$QueryHistoryPayload, S>

  type QueryHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QueryHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QueryHistoryCountAggregateInputType | true
    }

  export interface QueryHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QueryHistory'], meta: { name: 'QueryHistory' } }
    /**
     * Find zero or one QueryHistory that matches the filter.
     * @param {QueryHistoryFindUniqueArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QueryHistoryFindUniqueArgs>(args: SelectSubset<T, QueryHistoryFindUniqueArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QueryHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QueryHistoryFindUniqueOrThrowArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QueryHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, QueryHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueryHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindFirstArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QueryHistoryFindFirstArgs>(args?: SelectSubset<T, QueryHistoryFindFirstArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QueryHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindFirstOrThrowArgs} args - Arguments to find a QueryHistory
     * @example
     * // Get one QueryHistory
     * const queryHistory = await prisma.queryHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QueryHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, QueryHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QueryHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QueryHistories
     * const queryHistories = await prisma.queryHistory.findMany()
     * 
     * // Get first 10 QueryHistories
     * const queryHistories = await prisma.queryHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QueryHistoryFindManyArgs>(args?: SelectSubset<T, QueryHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QueryHistory.
     * @param {QueryHistoryCreateArgs} args - Arguments to create a QueryHistory.
     * @example
     * // Create one QueryHistory
     * const QueryHistory = await prisma.queryHistory.create({
     *   data: {
     *     // ... data to create a QueryHistory
     *   }
     * })
     * 
     */
    create<T extends QueryHistoryCreateArgs>(args: SelectSubset<T, QueryHistoryCreateArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QueryHistories.
     * @param {QueryHistoryCreateManyArgs} args - Arguments to create many QueryHistories.
     * @example
     * // Create many QueryHistories
     * const queryHistory = await prisma.queryHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QueryHistoryCreateManyArgs>(args?: SelectSubset<T, QueryHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QueryHistories and returns the data saved in the database.
     * @param {QueryHistoryCreateManyAndReturnArgs} args - Arguments to create many QueryHistories.
     * @example
     * // Create many QueryHistories
     * const queryHistory = await prisma.queryHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QueryHistories and only return the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QueryHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, QueryHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QueryHistory.
     * @param {QueryHistoryDeleteArgs} args - Arguments to delete one QueryHistory.
     * @example
     * // Delete one QueryHistory
     * const QueryHistory = await prisma.queryHistory.delete({
     *   where: {
     *     // ... filter to delete one QueryHistory
     *   }
     * })
     * 
     */
    delete<T extends QueryHistoryDeleteArgs>(args: SelectSubset<T, QueryHistoryDeleteArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QueryHistory.
     * @param {QueryHistoryUpdateArgs} args - Arguments to update one QueryHistory.
     * @example
     * // Update one QueryHistory
     * const queryHistory = await prisma.queryHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QueryHistoryUpdateArgs>(args: SelectSubset<T, QueryHistoryUpdateArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QueryHistories.
     * @param {QueryHistoryDeleteManyArgs} args - Arguments to filter QueryHistories to delete.
     * @example
     * // Delete a few QueryHistories
     * const { count } = await prisma.queryHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QueryHistoryDeleteManyArgs>(args?: SelectSubset<T, QueryHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QueryHistories
     * const queryHistory = await prisma.queryHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QueryHistoryUpdateManyArgs>(args: SelectSubset<T, QueryHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QueryHistories and returns the data updated in the database.
     * @param {QueryHistoryUpdateManyAndReturnArgs} args - Arguments to update many QueryHistories.
     * @example
     * // Update many QueryHistories
     * const queryHistory = await prisma.queryHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QueryHistories and only return the `id`
     * const queryHistoryWithIdOnly = await prisma.queryHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends QueryHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, QueryHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QueryHistory.
     * @param {QueryHistoryUpsertArgs} args - Arguments to update or create a QueryHistory.
     * @example
     * // Update or create a QueryHistory
     * const queryHistory = await prisma.queryHistory.upsert({
     *   create: {
     *     // ... data to create a QueryHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QueryHistory we want to update
     *   }
     * })
     */
    upsert<T extends QueryHistoryUpsertArgs>(args: SelectSubset<T, QueryHistoryUpsertArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QueryHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryCountArgs} args - Arguments to filter QueryHistories to count.
     * @example
     * // Count the number of QueryHistories
     * const count = await prisma.queryHistory.count({
     *   where: {
     *     // ... the filter for the QueryHistories we want to count
     *   }
     * })
    **/
    count<T extends QueryHistoryCountArgs>(
      args?: Subset<T, QueryHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QueryHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QueryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QueryHistoryAggregateArgs>(args: Subset<T, QueryHistoryAggregateArgs>): Prisma.PrismaPromise<GetQueryHistoryAggregateType<T>>

    /**
     * Group by QueryHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QueryHistoryGroupByArgs} args - Group by arguments.
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
      T extends QueryHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QueryHistoryGroupByArgs['orderBy'] }
        : { orderBy?: QueryHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QueryHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQueryHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QueryHistory model
   */
  readonly fields: QueryHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QueryHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QueryHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    visualization<T extends QueryHistory$visualizationArgs<ExtArgs> = {}>(args?: Subset<T, QueryHistory$visualizationArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QueryHistory model
   */ 
  interface QueryHistoryFieldRefs {
    readonly id: FieldRef<"QueryHistory", 'String'>
    readonly userId: FieldRef<"QueryHistory", 'String'>
    readonly userQuery: FieldRef<"QueryHistory", 'String'>
    readonly sqlQuery: FieldRef<"QueryHistory", 'String'>
    readonly relatedQueries: FieldRef<"QueryHistory", 'Json'>
    readonly results: FieldRef<"QueryHistory", 'Json'>
    readonly executionTime: FieldRef<"QueryHistory", 'Int'>
    readonly successful: FieldRef<"QueryHistory", 'Boolean'>
    readonly errorMessage: FieldRef<"QueryHistory", 'String'>
    readonly createdAt: FieldRef<"QueryHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QueryHistory findUnique
   */
  export type QueryHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory findUniqueOrThrow
   */
  export type QueryHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory findFirst
   */
  export type QueryHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryHistories.
     */
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory findFirstOrThrow
   */
  export type QueryHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistory to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QueryHistories.
     */
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory findMany
   */
  export type QueryHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter, which QueryHistories to fetch.
     */
    where?: QueryHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QueryHistories to fetch.
     */
    orderBy?: QueryHistoryOrderByWithRelationInput | QueryHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QueryHistories.
     */
    cursor?: QueryHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QueryHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QueryHistories.
     */
    skip?: number
    distinct?: QueryHistoryScalarFieldEnum | QueryHistoryScalarFieldEnum[]
  }

  /**
   * QueryHistory create
   */
  export type QueryHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a QueryHistory.
     */
    data: XOR<QueryHistoryCreateInput, QueryHistoryUncheckedCreateInput>
  }

  /**
   * QueryHistory createMany
   */
  export type QueryHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QueryHistories.
     */
    data: QueryHistoryCreateManyInput | QueryHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QueryHistory createManyAndReturn
   */
  export type QueryHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many QueryHistories.
     */
    data: QueryHistoryCreateManyInput | QueryHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueryHistory update
   */
  export type QueryHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a QueryHistory.
     */
    data: XOR<QueryHistoryUpdateInput, QueryHistoryUncheckedUpdateInput>
    /**
     * Choose, which QueryHistory to update.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory updateMany
   */
  export type QueryHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QueryHistories.
     */
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which QueryHistories to update
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to update.
     */
    limit?: number
  }

  /**
   * QueryHistory updateManyAndReturn
   */
  export type QueryHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * The data used to update QueryHistories.
     */
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyInput>
    /**
     * Filter which QueryHistories to update
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QueryHistory upsert
   */
  export type QueryHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the QueryHistory to update in case it exists.
     */
    where: QueryHistoryWhereUniqueInput
    /**
     * In case the QueryHistory found by the `where` argument doesn't exist, create a new QueryHistory with this data.
     */
    create: XOR<QueryHistoryCreateInput, QueryHistoryUncheckedCreateInput>
    /**
     * In case the QueryHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QueryHistoryUpdateInput, QueryHistoryUncheckedUpdateInput>
  }

  /**
   * QueryHistory delete
   */
  export type QueryHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
    /**
     * Filter which QueryHistory to delete.
     */
    where: QueryHistoryWhereUniqueInput
  }

  /**
   * QueryHistory deleteMany
   */
  export type QueryHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QueryHistories to delete
     */
    where?: QueryHistoryWhereInput
    /**
     * Limit how many QueryHistories to delete.
     */
    limit?: number
  }

  /**
   * QueryHistory.visualization
   */
  export type QueryHistory$visualizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    where?: VisualizationWhereInput
  }

  /**
   * QueryHistory without action
   */
  export type QueryHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QueryHistory
     */
    select?: QueryHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the QueryHistory
     */
    omit?: QueryHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QueryHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Visualization
   */

  export type AggregateVisualization = {
    _count: VisualizationCountAggregateOutputType | null
    _min: VisualizationMinAggregateOutputType | null
    _max: VisualizationMaxAggregateOutputType | null
  }

  export type VisualizationMinAggregateOutputType = {
    id: string | null
    queryId: string | null
    chartType: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisualizationMaxAggregateOutputType = {
    id: string | null
    queryId: string | null
    chartType: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisualizationCountAggregateOutputType = {
    id: number
    queryId: number
    chartType: number
    chartOptions: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisualizationMinAggregateInputType = {
    id?: true
    queryId?: true
    chartType?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisualizationMaxAggregateInputType = {
    id?: true
    queryId?: true
    chartType?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisualizationCountAggregateInputType = {
    id?: true
    queryId?: true
    chartType?: true
    chartOptions?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisualizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visualization to aggregate.
     */
    where?: VisualizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visualizations to fetch.
     */
    orderBy?: VisualizationOrderByWithRelationInput | VisualizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisualizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visualizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visualizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visualizations
    **/
    _count?: true | VisualizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisualizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisualizationMaxAggregateInputType
  }

  export type GetVisualizationAggregateType<T extends VisualizationAggregateArgs> = {
        [P in keyof T & keyof AggregateVisualization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisualization[P]>
      : GetScalarType<T[P], AggregateVisualization[P]>
  }




  export type VisualizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisualizationWhereInput
    orderBy?: VisualizationOrderByWithAggregationInput | VisualizationOrderByWithAggregationInput[]
    by: VisualizationScalarFieldEnum[] | VisualizationScalarFieldEnum
    having?: VisualizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisualizationCountAggregateInputType | true
    _min?: VisualizationMinAggregateInputType
    _max?: VisualizationMaxAggregateInputType
  }

  export type VisualizationGroupByOutputType = {
    id: string
    queryId: string
    chartType: string
    chartOptions: JsonValue | null
    title: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: VisualizationCountAggregateOutputType | null
    _min: VisualizationMinAggregateOutputType | null
    _max: VisualizationMaxAggregateOutputType | null
  }

  type GetVisualizationGroupByPayload<T extends VisualizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisualizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisualizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisualizationGroupByOutputType[P]>
            : GetScalarType<T[P], VisualizationGroupByOutputType[P]>
        }
      >
    >


  export type VisualizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    chartType?: boolean
    chartOptions?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualization"]>

  export type VisualizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    chartType?: boolean
    chartOptions?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualization"]>

  export type VisualizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    queryId?: boolean
    chartType?: boolean
    chartOptions?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visualization"]>

  export type VisualizationSelectScalar = {
    id?: boolean
    queryId?: boolean
    chartType?: boolean
    chartOptions?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisualizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "queryId" | "chartType" | "chartOptions" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["visualization"]>
  export type VisualizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }
  export type VisualizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }
  export type VisualizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    query?: boolean | QueryHistoryDefaultArgs<ExtArgs>
  }

  export type $VisualizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visualization"
    objects: {
      query: Prisma.$QueryHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      queryId: string
      chartType: string
      chartOptions: Prisma.JsonValue | null
      title: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visualization"]>
    composites: {}
  }

  type VisualizationGetPayload<S extends boolean | null | undefined | VisualizationDefaultArgs> = $Result.GetResult<Prisma.$VisualizationPayload, S>

  type VisualizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisualizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisualizationCountAggregateInputType | true
    }

  export interface VisualizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visualization'], meta: { name: 'Visualization' } }
    /**
     * Find zero or one Visualization that matches the filter.
     * @param {VisualizationFindUniqueArgs} args - Arguments to find a Visualization
     * @example
     * // Get one Visualization
     * const visualization = await prisma.visualization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisualizationFindUniqueArgs>(args: SelectSubset<T, VisualizationFindUniqueArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visualization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisualizationFindUniqueOrThrowArgs} args - Arguments to find a Visualization
     * @example
     * // Get one Visualization
     * const visualization = await prisma.visualization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisualizationFindUniqueOrThrowArgs>(args: SelectSubset<T, VisualizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visualization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationFindFirstArgs} args - Arguments to find a Visualization
     * @example
     * // Get one Visualization
     * const visualization = await prisma.visualization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisualizationFindFirstArgs>(args?: SelectSubset<T, VisualizationFindFirstArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visualization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationFindFirstOrThrowArgs} args - Arguments to find a Visualization
     * @example
     * // Get one Visualization
     * const visualization = await prisma.visualization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisualizationFindFirstOrThrowArgs>(args?: SelectSubset<T, VisualizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visualizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visualizations
     * const visualizations = await prisma.visualization.findMany()
     * 
     * // Get first 10 Visualizations
     * const visualizations = await prisma.visualization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visualizationWithIdOnly = await prisma.visualization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisualizationFindManyArgs>(args?: SelectSubset<T, VisualizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visualization.
     * @param {VisualizationCreateArgs} args - Arguments to create a Visualization.
     * @example
     * // Create one Visualization
     * const Visualization = await prisma.visualization.create({
     *   data: {
     *     // ... data to create a Visualization
     *   }
     * })
     * 
     */
    create<T extends VisualizationCreateArgs>(args: SelectSubset<T, VisualizationCreateArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visualizations.
     * @param {VisualizationCreateManyArgs} args - Arguments to create many Visualizations.
     * @example
     * // Create many Visualizations
     * const visualization = await prisma.visualization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisualizationCreateManyArgs>(args?: SelectSubset<T, VisualizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Visualizations and returns the data saved in the database.
     * @param {VisualizationCreateManyAndReturnArgs} args - Arguments to create many Visualizations.
     * @example
     * // Create many Visualizations
     * const visualization = await prisma.visualization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Visualizations and only return the `id`
     * const visualizationWithIdOnly = await prisma.visualization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VisualizationCreateManyAndReturnArgs>(args?: SelectSubset<T, VisualizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Visualization.
     * @param {VisualizationDeleteArgs} args - Arguments to delete one Visualization.
     * @example
     * // Delete one Visualization
     * const Visualization = await prisma.visualization.delete({
     *   where: {
     *     // ... filter to delete one Visualization
     *   }
     * })
     * 
     */
    delete<T extends VisualizationDeleteArgs>(args: SelectSubset<T, VisualizationDeleteArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visualization.
     * @param {VisualizationUpdateArgs} args - Arguments to update one Visualization.
     * @example
     * // Update one Visualization
     * const visualization = await prisma.visualization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisualizationUpdateArgs>(args: SelectSubset<T, VisualizationUpdateArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visualizations.
     * @param {VisualizationDeleteManyArgs} args - Arguments to filter Visualizations to delete.
     * @example
     * // Delete a few Visualizations
     * const { count } = await prisma.visualization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisualizationDeleteManyArgs>(args?: SelectSubset<T, VisualizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visualizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visualizations
     * const visualization = await prisma.visualization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisualizationUpdateManyArgs>(args: SelectSubset<T, VisualizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visualizations and returns the data updated in the database.
     * @param {VisualizationUpdateManyAndReturnArgs} args - Arguments to update many Visualizations.
     * @example
     * // Update many Visualizations
     * const visualization = await prisma.visualization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Visualizations and only return the `id`
     * const visualizationWithIdOnly = await prisma.visualization.updateManyAndReturn({
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
    updateManyAndReturn<T extends VisualizationUpdateManyAndReturnArgs>(args: SelectSubset<T, VisualizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Visualization.
     * @param {VisualizationUpsertArgs} args - Arguments to update or create a Visualization.
     * @example
     * // Update or create a Visualization
     * const visualization = await prisma.visualization.upsert({
     *   create: {
     *     // ... data to create a Visualization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visualization we want to update
     *   }
     * })
     */
    upsert<T extends VisualizationUpsertArgs>(args: SelectSubset<T, VisualizationUpsertArgs<ExtArgs>>): Prisma__VisualizationClient<$Result.GetResult<Prisma.$VisualizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visualizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationCountArgs} args - Arguments to filter Visualizations to count.
     * @example
     * // Count the number of Visualizations
     * const count = await prisma.visualization.count({
     *   where: {
     *     // ... the filter for the Visualizations we want to count
     *   }
     * })
    **/
    count<T extends VisualizationCountArgs>(
      args?: Subset<T, VisualizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisualizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visualization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisualizationAggregateArgs>(args: Subset<T, VisualizationAggregateArgs>): Prisma.PrismaPromise<GetVisualizationAggregateType<T>>

    /**
     * Group by Visualization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisualizationGroupByArgs} args - Group by arguments.
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
      T extends VisualizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisualizationGroupByArgs['orderBy'] }
        : { orderBy?: VisualizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisualizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisualizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visualization model
   */
  readonly fields: VisualizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visualization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisualizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    query<T extends QueryHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QueryHistoryDefaultArgs<ExtArgs>>): Prisma__QueryHistoryClient<$Result.GetResult<Prisma.$QueryHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Visualization model
   */ 
  interface VisualizationFieldRefs {
    readonly id: FieldRef<"Visualization", 'String'>
    readonly queryId: FieldRef<"Visualization", 'String'>
    readonly chartType: FieldRef<"Visualization", 'String'>
    readonly chartOptions: FieldRef<"Visualization", 'Json'>
    readonly title: FieldRef<"Visualization", 'String'>
    readonly description: FieldRef<"Visualization", 'String'>
    readonly createdAt: FieldRef<"Visualization", 'DateTime'>
    readonly updatedAt: FieldRef<"Visualization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visualization findUnique
   */
  export type VisualizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter, which Visualization to fetch.
     */
    where: VisualizationWhereUniqueInput
  }

  /**
   * Visualization findUniqueOrThrow
   */
  export type VisualizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter, which Visualization to fetch.
     */
    where: VisualizationWhereUniqueInput
  }

  /**
   * Visualization findFirst
   */
  export type VisualizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter, which Visualization to fetch.
     */
    where?: VisualizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visualizations to fetch.
     */
    orderBy?: VisualizationOrderByWithRelationInput | VisualizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visualizations.
     */
    cursor?: VisualizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visualizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visualizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visualizations.
     */
    distinct?: VisualizationScalarFieldEnum | VisualizationScalarFieldEnum[]
  }

  /**
   * Visualization findFirstOrThrow
   */
  export type VisualizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter, which Visualization to fetch.
     */
    where?: VisualizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visualizations to fetch.
     */
    orderBy?: VisualizationOrderByWithRelationInput | VisualizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visualizations.
     */
    cursor?: VisualizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visualizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visualizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visualizations.
     */
    distinct?: VisualizationScalarFieldEnum | VisualizationScalarFieldEnum[]
  }

  /**
   * Visualization findMany
   */
  export type VisualizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter, which Visualizations to fetch.
     */
    where?: VisualizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visualizations to fetch.
     */
    orderBy?: VisualizationOrderByWithRelationInput | VisualizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visualizations.
     */
    cursor?: VisualizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visualizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visualizations.
     */
    skip?: number
    distinct?: VisualizationScalarFieldEnum | VisualizationScalarFieldEnum[]
  }

  /**
   * Visualization create
   */
  export type VisualizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Visualization.
     */
    data: XOR<VisualizationCreateInput, VisualizationUncheckedCreateInput>
  }

  /**
   * Visualization createMany
   */
  export type VisualizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visualizations.
     */
    data: VisualizationCreateManyInput | VisualizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visualization createManyAndReturn
   */
  export type VisualizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * The data used to create many Visualizations.
     */
    data: VisualizationCreateManyInput | VisualizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visualization update
   */
  export type VisualizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Visualization.
     */
    data: XOR<VisualizationUpdateInput, VisualizationUncheckedUpdateInput>
    /**
     * Choose, which Visualization to update.
     */
    where: VisualizationWhereUniqueInput
  }

  /**
   * Visualization updateMany
   */
  export type VisualizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visualizations.
     */
    data: XOR<VisualizationUpdateManyMutationInput, VisualizationUncheckedUpdateManyInput>
    /**
     * Filter which Visualizations to update
     */
    where?: VisualizationWhereInput
    /**
     * Limit how many Visualizations to update.
     */
    limit?: number
  }

  /**
   * Visualization updateManyAndReturn
   */
  export type VisualizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * The data used to update Visualizations.
     */
    data: XOR<VisualizationUpdateManyMutationInput, VisualizationUncheckedUpdateManyInput>
    /**
     * Filter which Visualizations to update
     */
    where?: VisualizationWhereInput
    /**
     * Limit how many Visualizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Visualization upsert
   */
  export type VisualizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Visualization to update in case it exists.
     */
    where: VisualizationWhereUniqueInput
    /**
     * In case the Visualization found by the `where` argument doesn't exist, create a new Visualization with this data.
     */
    create: XOR<VisualizationCreateInput, VisualizationUncheckedCreateInput>
    /**
     * In case the Visualization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisualizationUpdateInput, VisualizationUncheckedUpdateInput>
  }

  /**
   * Visualization delete
   */
  export type VisualizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
    /**
     * Filter which Visualization to delete.
     */
    where: VisualizationWhereUniqueInput
  }

  /**
   * Visualization deleteMany
   */
  export type VisualizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visualizations to delete
     */
    where?: VisualizationWhereInput
    /**
     * Limit how many Visualizations to delete.
     */
    limit?: number
  }

  /**
   * Visualization without action
   */
  export type VisualizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visualization
     */
    select?: VisualizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visualization
     */
    omit?: VisualizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisualizationInclude<ExtArgs> | null
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
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DashboardMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    userId: string
    createdAt: Date
    updatedAt: Date
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
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    widgets?: boolean | Dashboard$widgetsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["dashboard"]>
  export type DashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    widgets?: boolean | Dashboard$widgetsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
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
      widgets: Prisma.$DashboardWidgetPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
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
    widgets<T extends Dashboard$widgetsArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$widgetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardWidgetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly userId: FieldRef<"Dashboard", 'String'>
    readonly createdAt: FieldRef<"Dashboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Dashboard", 'DateTime'>
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
   * Dashboard.widgets
   */
  export type Dashboard$widgetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    _min: DashboardWidgetMinAggregateOutputType | null
    _max: DashboardWidgetMaxAggregateOutputType | null
  }

  export type DashboardWidgetMinAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    title: string | null
    description: string | null
    sqlQuery: string | null
    chartType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardWidgetMaxAggregateOutputType = {
    id: string | null
    dashboardId: string | null
    title: string | null
    description: string | null
    sqlQuery: string | null
    chartType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DashboardWidgetCountAggregateOutputType = {
    id: number
    dashboardId: number
    title: number
    description: number
    sqlQuery: number
    chartType: number
    chartOptions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DashboardWidgetMinAggregateInputType = {
    id?: true
    dashboardId?: true
    title?: true
    description?: true
    sqlQuery?: true
    chartType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardWidgetMaxAggregateInputType = {
    id?: true
    dashboardId?: true
    title?: true
    description?: true
    sqlQuery?: true
    chartType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DashboardWidgetCountAggregateInputType = {
    id?: true
    dashboardId?: true
    title?: true
    description?: true
    sqlQuery?: true
    chartType?: true
    chartOptions?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: DashboardWidgetMinAggregateInputType
    _max?: DashboardWidgetMaxAggregateInputType
  }

  export type DashboardWidgetGroupByOutputType = {
    id: string
    dashboardId: string
    title: string
    description: string | null
    sqlQuery: string
    chartType: string
    chartOptions: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: DashboardWidgetCountAggregateOutputType | null
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
    title?: boolean
    description?: boolean
    sqlQuery?: boolean
    chartType?: boolean
    chartOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    title?: boolean
    description?: boolean
    sqlQuery?: boolean
    chartType?: boolean
    chartOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboardId?: boolean
    title?: boolean
    description?: boolean
    sqlQuery?: boolean
    chartType?: boolean
    chartOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardWidget"]>

  export type DashboardWidgetSelectScalar = {
    id?: boolean
    dashboardId?: boolean
    title?: boolean
    description?: boolean
    sqlQuery?: boolean
    chartType?: boolean
    chartOptions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DashboardWidgetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboardId" | "title" | "description" | "sqlQuery" | "chartType" | "chartOptions" | "createdAt" | "updatedAt", ExtArgs["result"]["dashboardWidget"]>
  export type DashboardWidgetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }
  export type DashboardWidgetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }
  export type DashboardWidgetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }

  export type $DashboardWidgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardWidget"
    objects: {
      dashboard: Prisma.$DashboardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dashboardId: string
      title: string
      description: string | null
      sqlQuery: string
      chartType: string
      chartOptions: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
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
    readonly title: FieldRef<"DashboardWidget", 'String'>
    readonly description: FieldRef<"DashboardWidget", 'String'>
    readonly sqlQuery: FieldRef<"DashboardWidget", 'String'>
    readonly chartType: FieldRef<"DashboardWidget", 'String'>
    readonly chartOptions: FieldRef<"DashboardWidget", 'Json'>
    readonly createdAt: FieldRef<"DashboardWidget", 'DateTime'>
    readonly updatedAt: FieldRef<"DashboardWidget", 'DateTime'>
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
   * Model UserSettings
   */

  export type AggregateUserSettings = {
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  export type UserSettingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    language: string | null
    voiceEnabled: boolean | null
    autoSuggestEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    language: string | null
    voiceEnabled: boolean | null
    autoSuggestEnabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSettingsCountAggregateOutputType = {
    id: number
    userId: number
    language: number
    voiceEnabled: number
    autoSuggestEnabled: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSettingsMinAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    voiceEnabled?: true
    autoSuggestEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsMaxAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    voiceEnabled?: true
    autoSuggestEnabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSettingsCountAggregateInputType = {
    id?: true
    userId?: true
    language?: true
    voiceEnabled?: true
    autoSuggestEnabled?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to aggregate.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSettings
    **/
    _count?: true | UserSettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSettingsMaxAggregateInputType
  }

  export type GetUserSettingsAggregateType<T extends UserSettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSettings[P]>
      : GetScalarType<T[P], AggregateUserSettings[P]>
  }




  export type UserSettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSettingsWhereInput
    orderBy?: UserSettingsOrderByWithAggregationInput | UserSettingsOrderByWithAggregationInput[]
    by: UserSettingsScalarFieldEnum[] | UserSettingsScalarFieldEnum
    having?: UserSettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSettingsCountAggregateInputType | true
    _min?: UserSettingsMinAggregateInputType
    _max?: UserSettingsMaxAggregateInputType
  }

  export type UserSettingsGroupByOutputType = {
    id: string
    userId: string
    language: string
    voiceEnabled: boolean
    autoSuggestEnabled: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserSettingsCountAggregateOutputType | null
    _min: UserSettingsMinAggregateOutputType | null
    _max: UserSettingsMaxAggregateOutputType | null
  }

  type GetUserSettingsGroupByPayload<T extends UserSettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
            : GetScalarType<T[P], UserSettingsGroupByOutputType[P]>
        }
      >
    >


  export type UserSettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    language?: boolean
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSettings"]>

  export type UserSettingsSelectScalar = {
    id?: boolean
    userId?: boolean
    language?: boolean
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "language" | "voiceEnabled" | "autoSuggestEnabled" | "createdAt" | "updatedAt", ExtArgs["result"]["userSettings"]>
  export type UserSettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSettings"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      language: string
      voiceEnabled: boolean
      autoSuggestEnabled: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSettings"]>
    composites: {}
  }

  type UserSettingsGetPayload<S extends boolean | null | undefined | UserSettingsDefaultArgs> = $Result.GetResult<Prisma.$UserSettingsPayload, S>

  type UserSettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSettingsCountAggregateInputType | true
    }

  export interface UserSettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSettings'], meta: { name: 'UserSettings' } }
    /**
     * Find zero or one UserSettings that matches the filter.
     * @param {UserSettingsFindUniqueArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSettingsFindUniqueArgs>(args: SelectSubset<T, UserSettingsFindUniqueArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSettings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSettingsFindUniqueOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSettingsFindFirstArgs>(args?: SelectSubset<T, UserSettingsFindFirstArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSettings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindFirstOrThrowArgs} args - Arguments to find a UserSettings
     * @example
     * // Get one UserSettings
     * const userSettings = await prisma.userSettings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSettings
     * const userSettings = await prisma.userSettings.findMany()
     * 
     * // Get first 10 UserSettings
     * const userSettings = await prisma.userSettings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSettingsFindManyArgs>(args?: SelectSubset<T, UserSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSettings.
     * @param {UserSettingsCreateArgs} args - Arguments to create a UserSettings.
     * @example
     * // Create one UserSettings
     * const UserSettings = await prisma.userSettings.create({
     *   data: {
     *     // ... data to create a UserSettings
     *   }
     * })
     * 
     */
    create<T extends UserSettingsCreateArgs>(args: SelectSubset<T, UserSettingsCreateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSettings.
     * @param {UserSettingsCreateManyArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSettingsCreateManyArgs>(args?: SelectSubset<T, UserSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSettings and returns the data saved in the database.
     * @param {UserSettingsCreateManyAndReturnArgs} args - Arguments to create many UserSettings.
     * @example
     * // Create many UserSettings
     * const userSettings = await prisma.userSettings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSettings.
     * @param {UserSettingsDeleteArgs} args - Arguments to delete one UserSettings.
     * @example
     * // Delete one UserSettings
     * const UserSettings = await prisma.userSettings.delete({
     *   where: {
     *     // ... filter to delete one UserSettings
     *   }
     * })
     * 
     */
    delete<T extends UserSettingsDeleteArgs>(args: SelectSubset<T, UserSettingsDeleteArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSettings.
     * @param {UserSettingsUpdateArgs} args - Arguments to update one UserSettings.
     * @example
     * // Update one UserSettings
     * const userSettings = await prisma.userSettings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSettingsUpdateArgs>(args: SelectSubset<T, UserSettingsUpdateArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSettings.
     * @param {UserSettingsDeleteManyArgs} args - Arguments to filter UserSettings to delete.
     * @example
     * // Delete a few UserSettings
     * const { count } = await prisma.userSettings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSettingsDeleteManyArgs>(args?: SelectSubset<T, UserSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSettingsUpdateManyArgs>(args: SelectSubset<T, UserSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSettings and returns the data updated in the database.
     * @param {UserSettingsUpdateManyAndReturnArgs} args - Arguments to update many UserSettings.
     * @example
     * // Update many UserSettings
     * const userSettings = await prisma.userSettings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSettings and only return the `id`
     * const userSettingsWithIdOnly = await prisma.userSettings.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSettings.
     * @param {UserSettingsUpsertArgs} args - Arguments to update or create a UserSettings.
     * @example
     * // Update or create a UserSettings
     * const userSettings = await prisma.userSettings.upsert({
     *   create: {
     *     // ... data to create a UserSettings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSettings we want to update
     *   }
     * })
     */
    upsert<T extends UserSettingsUpsertArgs>(args: SelectSubset<T, UserSettingsUpsertArgs<ExtArgs>>): Prisma__UserSettingsClient<$Result.GetResult<Prisma.$UserSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsCountArgs} args - Arguments to filter UserSettings to count.
     * @example
     * // Count the number of UserSettings
     * const count = await prisma.userSettings.count({
     *   where: {
     *     // ... the filter for the UserSettings we want to count
     *   }
     * })
    **/
    count<T extends UserSettingsCountArgs>(
      args?: Subset<T, UserSettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSettingsAggregateArgs>(args: Subset<T, UserSettingsAggregateArgs>): Prisma.PrismaPromise<GetUserSettingsAggregateType<T>>

    /**
     * Group by UserSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSettingsGroupByArgs} args - Group by arguments.
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
      T extends UserSettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSettingsGroupByArgs['orderBy'] }
        : { orderBy?: UserSettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSettings model
   */
  readonly fields: UserSettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSettings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSettings model
   */ 
  interface UserSettingsFieldRefs {
    readonly id: FieldRef<"UserSettings", 'String'>
    readonly userId: FieldRef<"UserSettings", 'String'>
    readonly language: FieldRef<"UserSettings", 'String'>
    readonly voiceEnabled: FieldRef<"UserSettings", 'Boolean'>
    readonly autoSuggestEnabled: FieldRef<"UserSettings", 'Boolean'>
    readonly createdAt: FieldRef<"UserSettings", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSettings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSettings findUnique
   */
  export type UserSettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findUniqueOrThrow
   */
  export type UserSettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings findFirst
   */
  export type UserSettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findFirstOrThrow
   */
  export type UserSettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSettings.
     */
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings findMany
   */
  export type UserSettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter, which UserSettings to fetch.
     */
    where?: UserSettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSettings to fetch.
     */
    orderBy?: UserSettingsOrderByWithRelationInput | UserSettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSettings.
     */
    cursor?: UserSettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSettings.
     */
    skip?: number
    distinct?: UserSettingsScalarFieldEnum | UserSettingsScalarFieldEnum[]
  }

  /**
   * UserSettings create
   */
  export type UserSettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSettings.
     */
    data: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
  }

  /**
   * UserSettings createMany
   */
  export type UserSettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSettings createManyAndReturn
   */
  export type UserSettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to create many UserSettings.
     */
    data: UserSettingsCreateManyInput | UserSettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings update
   */
  export type UserSettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSettings.
     */
    data: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
    /**
     * Choose, which UserSettings to update.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings updateMany
   */
  export type UserSettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
  }

  /**
   * UserSettings updateManyAndReturn
   */
  export type UserSettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * The data used to update UserSettings.
     */
    data: XOR<UserSettingsUpdateManyMutationInput, UserSettingsUncheckedUpdateManyInput>
    /**
     * Filter which UserSettings to update
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSettings upsert
   */
  export type UserSettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSettings to update in case it exists.
     */
    where: UserSettingsWhereUniqueInput
    /**
     * In case the UserSettings found by the `where` argument doesn't exist, create a new UserSettings with this data.
     */
    create: XOR<UserSettingsCreateInput, UserSettingsUncheckedCreateInput>
    /**
     * In case the UserSettings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSettingsUpdateInput, UserSettingsUncheckedUpdateInput>
  }

  /**
   * UserSettings delete
   */
  export type UserSettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
    /**
     * Filter which UserSettings to delete.
     */
    where: UserSettingsWhereUniqueInput
  }

  /**
   * UserSettings deleteMany
   */
  export type UserSettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSettings to delete
     */
    where?: UserSettingsWhereInput
    /**
     * Limit how many UserSettings to delete.
     */
    limit?: number
  }

  /**
   * UserSettings without action
   */
  export type UserSettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSettings
     */
    select?: UserSettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSettings
     */
    omit?: UserSettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSettingsInclude<ExtArgs> | null
  }


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


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    password: 'password',
    profilePicture: 'profilePicture',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DatabaseMetadataScalarFieldEnum: {
    id: 'id',
    tableName: 'tableName',
    description: 'description',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DatabaseMetadataScalarFieldEnum = (typeof DatabaseMetadataScalarFieldEnum)[keyof typeof DatabaseMetadataScalarFieldEnum]


  export const ColumnMetadataScalarFieldEnum: {
    id: 'id',
    databaseMetadataId: 'databaseMetadataId',
    columnName: 'columnName',
    dataType: 'dataType',
    description: 'description',
    isIdentifier: 'isIdentifier',
    isSensitive: 'isSensitive'
  };

  export type ColumnMetadataScalarFieldEnum = (typeof ColumnMetadataScalarFieldEnum)[keyof typeof ColumnMetadataScalarFieldEnum]


  export const QueryHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userQuery: 'userQuery',
    sqlQuery: 'sqlQuery',
    relatedQueries: 'relatedQueries',
    results: 'results',
    executionTime: 'executionTime',
    successful: 'successful',
    errorMessage: 'errorMessage',
    createdAt: 'createdAt'
  };

  export type QueryHistoryScalarFieldEnum = (typeof QueryHistoryScalarFieldEnum)[keyof typeof QueryHistoryScalarFieldEnum]


  export const VisualizationScalarFieldEnum: {
    id: 'id',
    queryId: 'queryId',
    chartType: 'chartType',
    chartOptions: 'chartOptions',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisualizationScalarFieldEnum = (typeof VisualizationScalarFieldEnum)[keyof typeof VisualizationScalarFieldEnum]


  export const DashboardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DashboardScalarFieldEnum = (typeof DashboardScalarFieldEnum)[keyof typeof DashboardScalarFieldEnum]


  export const DashboardWidgetScalarFieldEnum: {
    id: 'id',
    dashboardId: 'dashboardId',
    title: 'title',
    description: 'description',
    sqlQuery: 'sqlQuery',
    chartType: 'chartType',
    chartOptions: 'chartOptions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DashboardWidgetScalarFieldEnum = (typeof DashboardWidgetScalarFieldEnum)[keyof typeof DashboardWidgetScalarFieldEnum]


  export const UserSettingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    language: 'language',
    voiceEnabled: 'voiceEnabled',
    autoSuggestEnabled: 'autoSuggestEnabled',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSettingsScalarFieldEnum = (typeof UserSettingsScalarFieldEnum)[keyof typeof UserSettingsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    userId?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    queryHistory?: QueryHistoryListRelationFilter
    dashboards?: DashboardListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    queryHistory?: QueryHistoryOrderByRelationAggregateInput
    dashboards?: DashboardOrderByRelationAggregateInput
    settings?: UserSettingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profilePicture?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    queryHistory?: QueryHistoryListRelationFilter
    dashboards?: DashboardListRelationFilter
    settings?: XOR<UserSettingsNullableScalarRelationFilter, UserSettingsWhereInput> | null
  }, "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    profilePicture?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
  }

  export type DatabaseMetadataWhereInput = {
    AND?: DatabaseMetadataWhereInput | DatabaseMetadataWhereInput[]
    OR?: DatabaseMetadataWhereInput[]
    NOT?: DatabaseMetadataWhereInput | DatabaseMetadataWhereInput[]
    id?: StringFilter<"DatabaseMetadata"> | string
    tableName?: StringFilter<"DatabaseMetadata"> | string
    description?: StringNullableFilter<"DatabaseMetadata"> | string | null
    isVisible?: BoolFilter<"DatabaseMetadata"> | boolean
    createdAt?: DateTimeFilter<"DatabaseMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"DatabaseMetadata"> | Date | string
    columns?: ColumnMetadataListRelationFilter
  }

  export type DatabaseMetadataOrderByWithRelationInput = {
    id?: SortOrder
    tableName?: SortOrder
    description?: SortOrderInput | SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    columns?: ColumnMetadataOrderByRelationAggregateInput
  }

  export type DatabaseMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tableName?: string
    AND?: DatabaseMetadataWhereInput | DatabaseMetadataWhereInput[]
    OR?: DatabaseMetadataWhereInput[]
    NOT?: DatabaseMetadataWhereInput | DatabaseMetadataWhereInput[]
    description?: StringNullableFilter<"DatabaseMetadata"> | string | null
    isVisible?: BoolFilter<"DatabaseMetadata"> | boolean
    createdAt?: DateTimeFilter<"DatabaseMetadata"> | Date | string
    updatedAt?: DateTimeFilter<"DatabaseMetadata"> | Date | string
    columns?: ColumnMetadataListRelationFilter
  }, "id" | "tableName">

  export type DatabaseMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    tableName?: SortOrder
    description?: SortOrderInput | SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DatabaseMetadataCountOrderByAggregateInput
    _max?: DatabaseMetadataMaxOrderByAggregateInput
    _min?: DatabaseMetadataMinOrderByAggregateInput
  }

  export type DatabaseMetadataScalarWhereWithAggregatesInput = {
    AND?: DatabaseMetadataScalarWhereWithAggregatesInput | DatabaseMetadataScalarWhereWithAggregatesInput[]
    OR?: DatabaseMetadataScalarWhereWithAggregatesInput[]
    NOT?: DatabaseMetadataScalarWhereWithAggregatesInput | DatabaseMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DatabaseMetadata"> | string
    tableName?: StringWithAggregatesFilter<"DatabaseMetadata"> | string
    description?: StringNullableWithAggregatesFilter<"DatabaseMetadata"> | string | null
    isVisible?: BoolWithAggregatesFilter<"DatabaseMetadata"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DatabaseMetadata"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DatabaseMetadata"> | Date | string
  }

  export type ColumnMetadataWhereInput = {
    AND?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    OR?: ColumnMetadataWhereInput[]
    NOT?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    id?: StringFilter<"ColumnMetadata"> | string
    databaseMetadataId?: StringFilter<"ColumnMetadata"> | string
    columnName?: StringFilter<"ColumnMetadata"> | string
    dataType?: StringFilter<"ColumnMetadata"> | string
    description?: StringNullableFilter<"ColumnMetadata"> | string | null
    isIdentifier?: BoolFilter<"ColumnMetadata"> | boolean
    isSensitive?: BoolFilter<"ColumnMetadata"> | boolean
    databaseMetadata?: XOR<DatabaseMetadataScalarRelationFilter, DatabaseMetadataWhereInput>
  }

  export type ColumnMetadataOrderByWithRelationInput = {
    id?: SortOrder
    databaseMetadataId?: SortOrder
    columnName?: SortOrder
    dataType?: SortOrder
    description?: SortOrderInput | SortOrder
    isIdentifier?: SortOrder
    isSensitive?: SortOrder
    databaseMetadata?: DatabaseMetadataOrderByWithRelationInput
  }

  export type ColumnMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    databaseMetadataId_columnName?: ColumnMetadataDatabaseMetadataIdColumnNameCompoundUniqueInput
    AND?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    OR?: ColumnMetadataWhereInput[]
    NOT?: ColumnMetadataWhereInput | ColumnMetadataWhereInput[]
    databaseMetadataId?: StringFilter<"ColumnMetadata"> | string
    columnName?: StringFilter<"ColumnMetadata"> | string
    dataType?: StringFilter<"ColumnMetadata"> | string
    description?: StringNullableFilter<"ColumnMetadata"> | string | null
    isIdentifier?: BoolFilter<"ColumnMetadata"> | boolean
    isSensitive?: BoolFilter<"ColumnMetadata"> | boolean
    databaseMetadata?: XOR<DatabaseMetadataScalarRelationFilter, DatabaseMetadataWhereInput>
  }, "id" | "databaseMetadataId_columnName">

  export type ColumnMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    databaseMetadataId?: SortOrder
    columnName?: SortOrder
    dataType?: SortOrder
    description?: SortOrderInput | SortOrder
    isIdentifier?: SortOrder
    isSensitive?: SortOrder
    _count?: ColumnMetadataCountOrderByAggregateInput
    _max?: ColumnMetadataMaxOrderByAggregateInput
    _min?: ColumnMetadataMinOrderByAggregateInput
  }

  export type ColumnMetadataScalarWhereWithAggregatesInput = {
    AND?: ColumnMetadataScalarWhereWithAggregatesInput | ColumnMetadataScalarWhereWithAggregatesInput[]
    OR?: ColumnMetadataScalarWhereWithAggregatesInput[]
    NOT?: ColumnMetadataScalarWhereWithAggregatesInput | ColumnMetadataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ColumnMetadata"> | string
    databaseMetadataId?: StringWithAggregatesFilter<"ColumnMetadata"> | string
    columnName?: StringWithAggregatesFilter<"ColumnMetadata"> | string
    dataType?: StringWithAggregatesFilter<"ColumnMetadata"> | string
    description?: StringNullableWithAggregatesFilter<"ColumnMetadata"> | string | null
    isIdentifier?: BoolWithAggregatesFilter<"ColumnMetadata"> | boolean
    isSensitive?: BoolWithAggregatesFilter<"ColumnMetadata"> | boolean
  }

  export type QueryHistoryWhereInput = {
    AND?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    OR?: QueryHistoryWhereInput[]
    NOT?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    id?: StringFilter<"QueryHistory"> | string
    userId?: StringFilter<"QueryHistory"> | string
    userQuery?: StringFilter<"QueryHistory"> | string
    sqlQuery?: StringFilter<"QueryHistory"> | string
    relatedQueries?: JsonNullableFilter<"QueryHistory">
    results?: JsonNullableFilter<"QueryHistory">
    executionTime?: IntNullableFilter<"QueryHistory"> | number | null
    successful?: BoolFilter<"QueryHistory"> | boolean
    errorMessage?: StringNullableFilter<"QueryHistory"> | string | null
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    visualization?: XOR<VisualizationNullableScalarRelationFilter, VisualizationWhereInput> | null
  }

  export type QueryHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    sqlQuery?: SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    successful?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    visualization?: VisualizationOrderByWithRelationInput
  }

  export type QueryHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    OR?: QueryHistoryWhereInput[]
    NOT?: QueryHistoryWhereInput | QueryHistoryWhereInput[]
    userId?: StringFilter<"QueryHistory"> | string
    userQuery?: StringFilter<"QueryHistory"> | string
    sqlQuery?: StringFilter<"QueryHistory"> | string
    relatedQueries?: JsonNullableFilter<"QueryHistory">
    results?: JsonNullableFilter<"QueryHistory">
    executionTime?: IntNullableFilter<"QueryHistory"> | number | null
    successful?: BoolFilter<"QueryHistory"> | boolean
    errorMessage?: StringNullableFilter<"QueryHistory"> | string | null
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    visualization?: XOR<VisualizationNullableScalarRelationFilter, VisualizationWhereInput> | null
  }, "id">

  export type QueryHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    sqlQuery?: SortOrder
    relatedQueries?: SortOrderInput | SortOrder
    results?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    successful?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QueryHistoryCountOrderByAggregateInput
    _avg?: QueryHistoryAvgOrderByAggregateInput
    _max?: QueryHistoryMaxOrderByAggregateInput
    _min?: QueryHistoryMinOrderByAggregateInput
    _sum?: QueryHistorySumOrderByAggregateInput
  }

  export type QueryHistoryScalarWhereWithAggregatesInput = {
    AND?: QueryHistoryScalarWhereWithAggregatesInput | QueryHistoryScalarWhereWithAggregatesInput[]
    OR?: QueryHistoryScalarWhereWithAggregatesInput[]
    NOT?: QueryHistoryScalarWhereWithAggregatesInput | QueryHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QueryHistory"> | string
    userId?: StringWithAggregatesFilter<"QueryHistory"> | string
    userQuery?: StringWithAggregatesFilter<"QueryHistory"> | string
    sqlQuery?: StringWithAggregatesFilter<"QueryHistory"> | string
    relatedQueries?: JsonNullableWithAggregatesFilter<"QueryHistory">
    results?: JsonNullableWithAggregatesFilter<"QueryHistory">
    executionTime?: IntNullableWithAggregatesFilter<"QueryHistory"> | number | null
    successful?: BoolWithAggregatesFilter<"QueryHistory"> | boolean
    errorMessage?: StringNullableWithAggregatesFilter<"QueryHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QueryHistory"> | Date | string
  }

  export type VisualizationWhereInput = {
    AND?: VisualizationWhereInput | VisualizationWhereInput[]
    OR?: VisualizationWhereInput[]
    NOT?: VisualizationWhereInput | VisualizationWhereInput[]
    id?: StringFilter<"Visualization"> | string
    queryId?: StringFilter<"Visualization"> | string
    chartType?: StringFilter<"Visualization"> | string
    chartOptions?: JsonNullableFilter<"Visualization">
    title?: StringNullableFilter<"Visualization"> | string | null
    description?: StringNullableFilter<"Visualization"> | string | null
    createdAt?: DateTimeFilter<"Visualization"> | Date | string
    updatedAt?: DateTimeFilter<"Visualization"> | Date | string
    query?: XOR<QueryHistoryScalarRelationFilter, QueryHistoryWhereInput>
  }

  export type VisualizationOrderByWithRelationInput = {
    id?: SortOrder
    queryId?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    query?: QueryHistoryOrderByWithRelationInput
  }

  export type VisualizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    queryId?: string
    AND?: VisualizationWhereInput | VisualizationWhereInput[]
    OR?: VisualizationWhereInput[]
    NOT?: VisualizationWhereInput | VisualizationWhereInput[]
    chartType?: StringFilter<"Visualization"> | string
    chartOptions?: JsonNullableFilter<"Visualization">
    title?: StringNullableFilter<"Visualization"> | string | null
    description?: StringNullableFilter<"Visualization"> | string | null
    createdAt?: DateTimeFilter<"Visualization"> | Date | string
    updatedAt?: DateTimeFilter<"Visualization"> | Date | string
    query?: XOR<QueryHistoryScalarRelationFilter, QueryHistoryWhereInput>
  }, "id" | "queryId">

  export type VisualizationOrderByWithAggregationInput = {
    id?: SortOrder
    queryId?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisualizationCountOrderByAggregateInput
    _max?: VisualizationMaxOrderByAggregateInput
    _min?: VisualizationMinOrderByAggregateInput
  }

  export type VisualizationScalarWhereWithAggregatesInput = {
    AND?: VisualizationScalarWhereWithAggregatesInput | VisualizationScalarWhereWithAggregatesInput[]
    OR?: VisualizationScalarWhereWithAggregatesInput[]
    NOT?: VisualizationScalarWhereWithAggregatesInput | VisualizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Visualization"> | string
    queryId?: StringWithAggregatesFilter<"Visualization"> | string
    chartType?: StringWithAggregatesFilter<"Visualization"> | string
    chartOptions?: JsonNullableWithAggregatesFilter<"Visualization">
    title?: StringNullableWithAggregatesFilter<"Visualization"> | string | null
    description?: StringNullableWithAggregatesFilter<"Visualization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Visualization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visualization"> | Date | string
  }

  export type DashboardWhereInput = {
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    id?: StringFilter<"Dashboard"> | string
    userId?: StringFilter<"Dashboard"> | string
    createdAt?: DateTimeFilter<"Dashboard"> | Date | string
    updatedAt?: DateTimeFilter<"Dashboard"> | Date | string
    widgets?: DashboardWidgetListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DashboardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    widgets?: DashboardWidgetOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type DashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    userId?: StringFilter<"Dashboard"> | string
    createdAt?: DateTimeFilter<"Dashboard"> | Date | string
    updatedAt?: DateTimeFilter<"Dashboard"> | Date | string
    widgets?: DashboardWidgetListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DashboardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DashboardCountOrderByAggregateInput
    _max?: DashboardMaxOrderByAggregateInput
    _min?: DashboardMinOrderByAggregateInput
  }

  export type DashboardScalarWhereWithAggregatesInput = {
    AND?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    OR?: DashboardScalarWhereWithAggregatesInput[]
    NOT?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dashboard"> | string
    userId?: StringWithAggregatesFilter<"Dashboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
  }

  export type DashboardWidgetWhereInput = {
    AND?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    OR?: DashboardWidgetWhereInput[]
    NOT?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    id?: StringFilter<"DashboardWidget"> | string
    dashboardId?: StringFilter<"DashboardWidget"> | string
    title?: StringFilter<"DashboardWidget"> | string
    description?: StringNullableFilter<"DashboardWidget"> | string | null
    sqlQuery?: StringFilter<"DashboardWidget"> | string
    chartType?: StringFilter<"DashboardWidget"> | string
    chartOptions?: JsonNullableFilter<"DashboardWidget">
    createdAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updatedAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
  }

  export type DashboardWidgetOrderByWithRelationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sqlQuery?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dashboard?: DashboardOrderByWithRelationInput
  }

  export type DashboardWidgetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    OR?: DashboardWidgetWhereInput[]
    NOT?: DashboardWidgetWhereInput | DashboardWidgetWhereInput[]
    dashboardId?: StringFilter<"DashboardWidget"> | string
    title?: StringFilter<"DashboardWidget"> | string
    description?: StringNullableFilter<"DashboardWidget"> | string | null
    sqlQuery?: StringFilter<"DashboardWidget"> | string
    chartType?: StringFilter<"DashboardWidget"> | string
    chartOptions?: JsonNullableFilter<"DashboardWidget">
    createdAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updatedAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
  }, "id">

  export type DashboardWidgetOrderByWithAggregationInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    sqlQuery?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DashboardWidgetCountOrderByAggregateInput
    _max?: DashboardWidgetMaxOrderByAggregateInput
    _min?: DashboardWidgetMinOrderByAggregateInput
  }

  export type DashboardWidgetScalarWhereWithAggregatesInput = {
    AND?: DashboardWidgetScalarWhereWithAggregatesInput | DashboardWidgetScalarWhereWithAggregatesInput[]
    OR?: DashboardWidgetScalarWhereWithAggregatesInput[]
    NOT?: DashboardWidgetScalarWhereWithAggregatesInput | DashboardWidgetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DashboardWidget"> | string
    dashboardId?: StringWithAggregatesFilter<"DashboardWidget"> | string
    title?: StringWithAggregatesFilter<"DashboardWidget"> | string
    description?: StringNullableWithAggregatesFilter<"DashboardWidget"> | string | null
    sqlQuery?: StringWithAggregatesFilter<"DashboardWidget"> | string
    chartType?: StringWithAggregatesFilter<"DashboardWidget"> | string
    chartOptions?: JsonNullableWithAggregatesFilter<"DashboardWidget">
    createdAt?: DateTimeWithAggregatesFilter<"DashboardWidget"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DashboardWidget"> | Date | string
  }

  export type UserSettingsWhereInput = {
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    id?: StringFilter<"UserSettings"> | string
    userId?: StringFilter<"UserSettings"> | string
    language?: StringFilter<"UserSettings"> | string
    voiceEnabled?: BoolFilter<"UserSettings"> | boolean
    autoSuggestEnabled?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSettingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    voiceEnabled?: SortOrder
    autoSuggestEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSettingsWhereInput | UserSettingsWhereInput[]
    OR?: UserSettingsWhereInput[]
    NOT?: UserSettingsWhereInput | UserSettingsWhereInput[]
    language?: StringFilter<"UserSettings"> | string
    voiceEnabled?: BoolFilter<"UserSettings"> | boolean
    autoSuggestEnabled?: BoolFilter<"UserSettings"> | boolean
    createdAt?: DateTimeFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeFilter<"UserSettings"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSettingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    voiceEnabled?: SortOrder
    autoSuggestEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSettingsCountOrderByAggregateInput
    _max?: UserSettingsMaxOrderByAggregateInput
    _min?: UserSettingsMinOrderByAggregateInput
  }

  export type UserSettingsScalarWhereWithAggregatesInput = {
    AND?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    OR?: UserSettingsScalarWhereWithAggregatesInput[]
    NOT?: UserSettingsScalarWhereWithAggregatesInput | UserSettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSettings"> | string
    userId?: StringWithAggregatesFilter<"UserSettings"> | string
    language?: StringWithAggregatesFilter<"UserSettings"> | string
    voiceEnabled?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    autoSuggestEnabled?: BoolWithAggregatesFilter<"UserSettings"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSettings"> | Date | string
  }

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

  export type UserCreateInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryCreateNestedManyWithoutUserInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUpdateManyWithoutUserNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
  }

  export type DatabaseMetadataCreateInput = {
    id?: string
    tableName: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnMetadataCreateNestedManyWithoutDatabaseMetadataInput
  }

  export type DatabaseMetadataUncheckedCreateInput = {
    id?: string
    tableName: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnMetadataUncheckedCreateNestedManyWithoutDatabaseMetadataInput
  }

  export type DatabaseMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnMetadataUpdateManyWithoutDatabaseMetadataNestedInput
  }

  export type DatabaseMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnMetadataUncheckedUpdateManyWithoutDatabaseMetadataNestedInput
  }

  export type DatabaseMetadataCreateManyInput = {
    id?: string
    tableName: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatabaseMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMetadataCreateInput = {
    id?: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
    databaseMetadata: DatabaseMetadataCreateNestedOneWithoutColumnsInput
  }

  export type ColumnMetadataUncheckedCreateInput = {
    id?: string
    databaseMetadataId: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
    databaseMetadata?: DatabaseMetadataUpdateOneRequiredWithoutColumnsNestedInput
  }

  export type ColumnMetadataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    databaseMetadataId?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnMetadataCreateManyInput = {
    id?: string
    databaseMetadataId: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnMetadataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    databaseMetadataId?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type QueryHistoryCreateInput = {
    id?: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQueryHistoryInput
    visualization?: VisualizationCreateNestedOneWithoutQueryInput
  }

  export type QueryHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    visualization?: VisualizationUncheckedCreateNestedOneWithoutQueryInput
  }

  export type QueryHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQueryHistoryNestedInput
    visualization?: VisualizationUpdateOneWithoutQueryNestedInput
  }

  export type QueryHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visualization?: VisualizationUncheckedUpdateOneWithoutQueryNestedInput
  }

  export type QueryHistoryCreateManyInput = {
    id?: string
    userId: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type QueryHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualizationCreateInput = {
    id?: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    query: QueryHistoryCreateNestedOneWithoutVisualizationInput
  }

  export type VisualizationUncheckedCreateInput = {
    id?: string
    queryId: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    query?: QueryHistoryUpdateOneRequiredWithoutVisualizationNestedInput
  }

  export type VisualizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryId?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualizationCreateManyInput = {
    id?: string
    queryId: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryId?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widgets?: DashboardWidgetCreateNestedManyWithoutDashboardInput
    user: UserCreateNestedOneWithoutDashboardsInput
  }

  export type DashboardUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widgets?: DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: DashboardWidgetUpdateManyWithoutDashboardNestedInput
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
  }

  export type DashboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: DashboardWidgetUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateInput = {
    id?: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dashboard: DashboardCreateNestedOneWithoutWidgetsInput
  }

  export type DashboardWidgetUncheckedCreateInput = {
    id?: string
    dashboardId: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardWidgetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard?: DashboardUpdateOneRequiredWithoutWidgetsNestedInput
  }

  export type DashboardWidgetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateManyInput = {
    id?: string
    dashboardId: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardWidgetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dashboardId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateInput = {
    id?: string
    language?: string
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSettingsInput
  }

  export type UserSettingsUncheckedCreateInput = {
    id?: string
    userId: string
    language?: string
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSettingsNestedInput
  }

  export type UserSettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsCreateManyInput = {
    id?: string
    userId: string
    language?: string
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type QueryHistoryListRelationFilter = {
    every?: QueryHistoryWhereInput
    some?: QueryHistoryWhereInput
    none?: QueryHistoryWhereInput
  }

  export type DashboardListRelationFilter = {
    every?: DashboardWhereInput
    some?: DashboardWhereInput
    none?: DashboardWhereInput
  }

  export type UserSettingsNullableScalarRelationFilter = {
    is?: UserSettingsWhereInput | null
    isNot?: UserSettingsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QueryHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profilePicture?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ColumnMetadataListRelationFilter = {
    every?: ColumnMetadataWhereInput
    some?: ColumnMetadataWhereInput
    none?: ColumnMetadataWhereInput
  }

  export type ColumnMetadataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatabaseMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatabaseMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DatabaseMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    description?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DatabaseMetadataScalarRelationFilter = {
    is?: DatabaseMetadataWhereInput
    isNot?: DatabaseMetadataWhereInput
  }

  export type ColumnMetadataDatabaseMetadataIdColumnNameCompoundUniqueInput = {
    databaseMetadataId: string
    columnName: string
  }

  export type ColumnMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    databaseMetadataId?: SortOrder
    columnName?: SortOrder
    dataType?: SortOrder
    description?: SortOrder
    isIdentifier?: SortOrder
    isSensitive?: SortOrder
  }

  export type ColumnMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    databaseMetadataId?: SortOrder
    columnName?: SortOrder
    dataType?: SortOrder
    description?: SortOrder
    isIdentifier?: SortOrder
    isSensitive?: SortOrder
  }

  export type ColumnMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    databaseMetadataId?: SortOrder
    columnName?: SortOrder
    dataType?: SortOrder
    description?: SortOrder
    isIdentifier?: SortOrder
    isSensitive?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type VisualizationNullableScalarRelationFilter = {
    is?: VisualizationWhereInput | null
    isNot?: VisualizationWhereInput | null
  }

  export type QueryHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    sqlQuery?: SortOrder
    relatedQueries?: SortOrder
    results?: SortOrder
    executionTime?: SortOrder
    successful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistoryAvgOrderByAggregateInput = {
    executionTime?: SortOrder
  }

  export type QueryHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    successful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userQuery?: SortOrder
    sqlQuery?: SortOrder
    executionTime?: SortOrder
    successful?: SortOrder
    errorMessage?: SortOrder
    createdAt?: SortOrder
  }

  export type QueryHistorySumOrderByAggregateInput = {
    executionTime?: SortOrder
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

  export type QueryHistoryScalarRelationFilter = {
    is?: QueryHistoryWhereInput
    isNot?: QueryHistoryWhereInput
  }

  export type VisualizationCountOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisualizationMaxOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    chartType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisualizationMinOrderByAggregateInput = {
    id?: SortOrder
    queryId?: SortOrder
    chartType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardWidgetListRelationFilter = {
    every?: DashboardWidgetWhereInput
    some?: DashboardWidgetWhereInput
    none?: DashboardWidgetWhereInput
  }

  export type DashboardWidgetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardScalarRelationFilter = {
    is?: DashboardWhereInput
    isNot?: DashboardWhereInput
  }

  export type DashboardWidgetCountOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sqlQuery?: SortOrder
    chartType?: SortOrder
    chartOptions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardWidgetMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sqlQuery?: SortOrder
    chartType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DashboardWidgetMinOrderByAggregateInput = {
    id?: SortOrder
    dashboardId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    sqlQuery?: SortOrder
    chartType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    voiceEnabled?: SortOrder
    autoSuggestEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    voiceEnabled?: SortOrder
    autoSuggestEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSettingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    language?: SortOrder
    voiceEnabled?: SortOrder
    autoSuggestEnabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type QueryHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type DashboardCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type UserSettingsCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
  }

  export type QueryHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
  }

  export type DashboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type UserSettingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    connect?: UserSettingsWhereUniqueInput
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

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type QueryHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutUserInput | QueryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutUserInput | QueryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutUserInput | QueryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
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

  export type UserSettingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QueryHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput> | QueryHistoryCreateWithoutUserInput[] | QueryHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutUserInput | QueryHistoryCreateOrConnectWithoutUserInput[]
    upsert?: QueryHistoryUpsertWithWhereUniqueWithoutUserInput | QueryHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QueryHistoryCreateManyUserInputEnvelope
    set?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    disconnect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    delete?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    connect?: QueryHistoryWhereUniqueInput | QueryHistoryWhereUniqueInput[]
    update?: QueryHistoryUpdateWithWhereUniqueWithoutUserInput | QueryHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QueryHistoryUpdateManyWithWhereWithoutUserInput | QueryHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
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

  export type UserSettingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSettingsCreateOrConnectWithoutUserInput
    upsert?: UserSettingsUpsertWithoutUserInput
    disconnect?: UserSettingsWhereInput | boolean
    delete?: UserSettingsWhereInput | boolean
    connect?: UserSettingsWhereUniqueInput
    update?: XOR<XOR<UserSettingsUpdateToOneWithWhereWithoutUserInput, UserSettingsUpdateWithoutUserInput>, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type ColumnMetadataCreateNestedManyWithoutDatabaseMetadataInput = {
    create?: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput> | ColumnMetadataCreateWithoutDatabaseMetadataInput[] | ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput | ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput[]
    createMany?: ColumnMetadataCreateManyDatabaseMetadataInputEnvelope
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
  }

  export type ColumnMetadataUncheckedCreateNestedManyWithoutDatabaseMetadataInput = {
    create?: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput> | ColumnMetadataCreateWithoutDatabaseMetadataInput[] | ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput | ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput[]
    createMany?: ColumnMetadataCreateManyDatabaseMetadataInputEnvelope
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ColumnMetadataUpdateManyWithoutDatabaseMetadataNestedInput = {
    create?: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput> | ColumnMetadataCreateWithoutDatabaseMetadataInput[] | ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput | ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput[]
    upsert?: ColumnMetadataUpsertWithWhereUniqueWithoutDatabaseMetadataInput | ColumnMetadataUpsertWithWhereUniqueWithoutDatabaseMetadataInput[]
    createMany?: ColumnMetadataCreateManyDatabaseMetadataInputEnvelope
    set?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    disconnect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    delete?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    update?: ColumnMetadataUpdateWithWhereUniqueWithoutDatabaseMetadataInput | ColumnMetadataUpdateWithWhereUniqueWithoutDatabaseMetadataInput[]
    updateMany?: ColumnMetadataUpdateManyWithWhereWithoutDatabaseMetadataInput | ColumnMetadataUpdateManyWithWhereWithoutDatabaseMetadataInput[]
    deleteMany?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
  }

  export type ColumnMetadataUncheckedUpdateManyWithoutDatabaseMetadataNestedInput = {
    create?: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput> | ColumnMetadataCreateWithoutDatabaseMetadataInput[] | ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput[]
    connectOrCreate?: ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput | ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput[]
    upsert?: ColumnMetadataUpsertWithWhereUniqueWithoutDatabaseMetadataInput | ColumnMetadataUpsertWithWhereUniqueWithoutDatabaseMetadataInput[]
    createMany?: ColumnMetadataCreateManyDatabaseMetadataInputEnvelope
    set?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    disconnect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    delete?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    connect?: ColumnMetadataWhereUniqueInput | ColumnMetadataWhereUniqueInput[]
    update?: ColumnMetadataUpdateWithWhereUniqueWithoutDatabaseMetadataInput | ColumnMetadataUpdateWithWhereUniqueWithoutDatabaseMetadataInput[]
    updateMany?: ColumnMetadataUpdateManyWithWhereWithoutDatabaseMetadataInput | ColumnMetadataUpdateManyWithWhereWithoutDatabaseMetadataInput[]
    deleteMany?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
  }

  export type DatabaseMetadataCreateNestedOneWithoutColumnsInput = {
    create?: XOR<DatabaseMetadataCreateWithoutColumnsInput, DatabaseMetadataUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: DatabaseMetadataCreateOrConnectWithoutColumnsInput
    connect?: DatabaseMetadataWhereUniqueInput
  }

  export type DatabaseMetadataUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<DatabaseMetadataCreateWithoutColumnsInput, DatabaseMetadataUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: DatabaseMetadataCreateOrConnectWithoutColumnsInput
    upsert?: DatabaseMetadataUpsertWithoutColumnsInput
    connect?: DatabaseMetadataWhereUniqueInput
    update?: XOR<XOR<DatabaseMetadataUpdateToOneWithWhereWithoutColumnsInput, DatabaseMetadataUpdateWithoutColumnsInput>, DatabaseMetadataUncheckedUpdateWithoutColumnsInput>
  }

  export type UserCreateNestedOneWithoutQueryHistoryInput = {
    create?: XOR<UserCreateWithoutQueryHistoryInput, UserUncheckedCreateWithoutQueryHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type VisualizationCreateNestedOneWithoutQueryInput = {
    create?: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
    connectOrCreate?: VisualizationCreateOrConnectWithoutQueryInput
    connect?: VisualizationWhereUniqueInput
  }

  export type VisualizationUncheckedCreateNestedOneWithoutQueryInput = {
    create?: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
    connectOrCreate?: VisualizationCreateOrConnectWithoutQueryInput
    connect?: VisualizationWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQueryHistoryNestedInput = {
    create?: XOR<UserCreateWithoutQueryHistoryInput, UserUncheckedCreateWithoutQueryHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutQueryHistoryInput
    upsert?: UserUpsertWithoutQueryHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQueryHistoryInput, UserUpdateWithoutQueryHistoryInput>, UserUncheckedUpdateWithoutQueryHistoryInput>
  }

  export type VisualizationUpdateOneWithoutQueryNestedInput = {
    create?: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
    connectOrCreate?: VisualizationCreateOrConnectWithoutQueryInput
    upsert?: VisualizationUpsertWithoutQueryInput
    disconnect?: VisualizationWhereInput | boolean
    delete?: VisualizationWhereInput | boolean
    connect?: VisualizationWhereUniqueInput
    update?: XOR<XOR<VisualizationUpdateToOneWithWhereWithoutQueryInput, VisualizationUpdateWithoutQueryInput>, VisualizationUncheckedUpdateWithoutQueryInput>
  }

  export type VisualizationUncheckedUpdateOneWithoutQueryNestedInput = {
    create?: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
    connectOrCreate?: VisualizationCreateOrConnectWithoutQueryInput
    upsert?: VisualizationUpsertWithoutQueryInput
    disconnect?: VisualizationWhereInput | boolean
    delete?: VisualizationWhereInput | boolean
    connect?: VisualizationWhereUniqueInput
    update?: XOR<XOR<VisualizationUpdateToOneWithWhereWithoutQueryInput, VisualizationUpdateWithoutQueryInput>, VisualizationUncheckedUpdateWithoutQueryInput>
  }

  export type QueryHistoryCreateNestedOneWithoutVisualizationInput = {
    create?: XOR<QueryHistoryCreateWithoutVisualizationInput, QueryHistoryUncheckedCreateWithoutVisualizationInput>
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutVisualizationInput
    connect?: QueryHistoryWhereUniqueInput
  }

  export type QueryHistoryUpdateOneRequiredWithoutVisualizationNestedInput = {
    create?: XOR<QueryHistoryCreateWithoutVisualizationInput, QueryHistoryUncheckedCreateWithoutVisualizationInput>
    connectOrCreate?: QueryHistoryCreateOrConnectWithoutVisualizationInput
    upsert?: QueryHistoryUpsertWithoutVisualizationInput
    connect?: QueryHistoryWhereUniqueInput
    update?: XOR<XOR<QueryHistoryUpdateToOneWithWhereWithoutVisualizationInput, QueryHistoryUpdateWithoutVisualizationInput>, QueryHistoryUncheckedUpdateWithoutVisualizationInput>
  }

  export type DashboardWidgetCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDashboardsInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput> | DashboardWidgetCreateWithoutDashboardInput[] | DashboardWidgetUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardWidgetCreateOrConnectWithoutDashboardInput | DashboardWidgetCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardWidgetCreateManyDashboardInputEnvelope
    connect?: DashboardWidgetWhereUniqueInput | DashboardWidgetWhereUniqueInput[]
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

  export type UserUpdateOneRequiredWithoutDashboardsNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    upsert?: UserUpsertWithoutDashboardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsInput, UserUpdateWithoutDashboardsInput>, UserUncheckedUpdateWithoutDashboardsInput>
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

  export type DashboardCreateNestedOneWithoutWidgetsInput = {
    create?: XOR<DashboardCreateWithoutWidgetsInput, DashboardUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutWidgetsInput
    connect?: DashboardWhereUniqueInput
  }

  export type DashboardUpdateOneRequiredWithoutWidgetsNestedInput = {
    create?: XOR<DashboardCreateWithoutWidgetsInput, DashboardUncheckedCreateWithoutWidgetsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutWidgetsInput
    upsert?: DashboardUpsertWithoutWidgetsInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutWidgetsInput, DashboardUpdateWithoutWidgetsInput>, DashboardUncheckedUpdateWithoutWidgetsInput>
  }

  export type UserCreateNestedOneWithoutSettingsInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSettingsNestedInput = {
    create?: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSettingsInput
    upsert?: UserUpsertWithoutSettingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSettingsInput, UserUpdateWithoutSettingsInput>, UserUncheckedUpdateWithoutSettingsInput>
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

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type QueryHistoryCreateWithoutUserInput = {
    id?: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    visualization?: VisualizationCreateNestedOneWithoutQueryInput
  }

  export type QueryHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    visualization?: VisualizationUncheckedCreateNestedOneWithoutQueryInput
  }

  export type QueryHistoryCreateOrConnectWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    create: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput>
  }

  export type QueryHistoryCreateManyUserInputEnvelope = {
    data: QueryHistoryCreateManyUserInput | QueryHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DashboardCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widgets?: DashboardWidgetCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    widgets?: DashboardWidgetUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutUserInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput>
  }

  export type DashboardCreateManyUserInputEnvelope = {
    data: DashboardCreateManyUserInput | DashboardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSettingsCreateWithoutUserInput = {
    id?: string
    language?: string
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsUncheckedCreateWithoutUserInput = {
    id?: string
    language?: string
    voiceEnabled?: boolean
    autoSuggestEnabled?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSettingsCreateOrConnectWithoutUserInput = {
    where: UserSettingsWhereUniqueInput
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
  }

  export type QueryHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    update: XOR<QueryHistoryUpdateWithoutUserInput, QueryHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<QueryHistoryCreateWithoutUserInput, QueryHistoryUncheckedCreateWithoutUserInput>
  }

  export type QueryHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: QueryHistoryWhereUniqueInput
    data: XOR<QueryHistoryUpdateWithoutUserInput, QueryHistoryUncheckedUpdateWithoutUserInput>
  }

  export type QueryHistoryUpdateManyWithWhereWithoutUserInput = {
    where: QueryHistoryScalarWhereInput
    data: XOR<QueryHistoryUpdateManyMutationInput, QueryHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type QueryHistoryScalarWhereInput = {
    AND?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
    OR?: QueryHistoryScalarWhereInput[]
    NOT?: QueryHistoryScalarWhereInput | QueryHistoryScalarWhereInput[]
    id?: StringFilter<"QueryHistory"> | string
    userId?: StringFilter<"QueryHistory"> | string
    userQuery?: StringFilter<"QueryHistory"> | string
    sqlQuery?: StringFilter<"QueryHistory"> | string
    relatedQueries?: JsonNullableFilter<"QueryHistory">
    results?: JsonNullableFilter<"QueryHistory">
    executionTime?: IntNullableFilter<"QueryHistory"> | number | null
    successful?: BoolFilter<"QueryHistory"> | boolean
    errorMessage?: StringNullableFilter<"QueryHistory"> | string | null
    createdAt?: DateTimeFilter<"QueryHistory"> | Date | string
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
    userId?: StringFilter<"Dashboard"> | string
    createdAt?: DateTimeFilter<"Dashboard"> | Date | string
    updatedAt?: DateTimeFilter<"Dashboard"> | Date | string
  }

  export type UserSettingsUpsertWithoutUserInput = {
    update: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
    create: XOR<UserSettingsCreateWithoutUserInput, UserSettingsUncheckedCreateWithoutUserInput>
    where?: UserSettingsWhereInput
  }

  export type UserSettingsUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSettingsWhereInput
    data: XOR<UserSettingsUpdateWithoutUserInput, UserSettingsUncheckedUpdateWithoutUserInput>
  }

  export type UserSettingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSettingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    voiceEnabled?: BoolFieldUpdateOperationsInput | boolean
    autoSuggestEnabled?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMetadataCreateWithoutDatabaseMetadataInput = {
    id?: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput = {
    id?: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataCreateOrConnectWithoutDatabaseMetadataInput = {
    where: ColumnMetadataWhereUniqueInput
    create: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput>
  }

  export type ColumnMetadataCreateManyDatabaseMetadataInputEnvelope = {
    data: ColumnMetadataCreateManyDatabaseMetadataInput | ColumnMetadataCreateManyDatabaseMetadataInput[]
    skipDuplicates?: boolean
  }

  export type ColumnMetadataUpsertWithWhereUniqueWithoutDatabaseMetadataInput = {
    where: ColumnMetadataWhereUniqueInput
    update: XOR<ColumnMetadataUpdateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedUpdateWithoutDatabaseMetadataInput>
    create: XOR<ColumnMetadataCreateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedCreateWithoutDatabaseMetadataInput>
  }

  export type ColumnMetadataUpdateWithWhereUniqueWithoutDatabaseMetadataInput = {
    where: ColumnMetadataWhereUniqueInput
    data: XOR<ColumnMetadataUpdateWithoutDatabaseMetadataInput, ColumnMetadataUncheckedUpdateWithoutDatabaseMetadataInput>
  }

  export type ColumnMetadataUpdateManyWithWhereWithoutDatabaseMetadataInput = {
    where: ColumnMetadataScalarWhereInput
    data: XOR<ColumnMetadataUpdateManyMutationInput, ColumnMetadataUncheckedUpdateManyWithoutDatabaseMetadataInput>
  }

  export type ColumnMetadataScalarWhereInput = {
    AND?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
    OR?: ColumnMetadataScalarWhereInput[]
    NOT?: ColumnMetadataScalarWhereInput | ColumnMetadataScalarWhereInput[]
    id?: StringFilter<"ColumnMetadata"> | string
    databaseMetadataId?: StringFilter<"ColumnMetadata"> | string
    columnName?: StringFilter<"ColumnMetadata"> | string
    dataType?: StringFilter<"ColumnMetadata"> | string
    description?: StringNullableFilter<"ColumnMetadata"> | string | null
    isIdentifier?: BoolFilter<"ColumnMetadata"> | boolean
    isSensitive?: BoolFilter<"ColumnMetadata"> | boolean
  }

  export type DatabaseMetadataCreateWithoutColumnsInput = {
    id?: string
    tableName: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatabaseMetadataUncheckedCreateWithoutColumnsInput = {
    id?: string
    tableName: string
    description?: string | null
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatabaseMetadataCreateOrConnectWithoutColumnsInput = {
    where: DatabaseMetadataWhereUniqueInput
    create: XOR<DatabaseMetadataCreateWithoutColumnsInput, DatabaseMetadataUncheckedCreateWithoutColumnsInput>
  }

  export type DatabaseMetadataUpsertWithoutColumnsInput = {
    update: XOR<DatabaseMetadataUpdateWithoutColumnsInput, DatabaseMetadataUncheckedUpdateWithoutColumnsInput>
    create: XOR<DatabaseMetadataCreateWithoutColumnsInput, DatabaseMetadataUncheckedCreateWithoutColumnsInput>
    where?: DatabaseMetadataWhereInput
  }

  export type DatabaseMetadataUpdateToOneWithWhereWithoutColumnsInput = {
    where?: DatabaseMetadataWhereInput
    data: XOR<DatabaseMetadataUpdateWithoutColumnsInput, DatabaseMetadataUncheckedUpdateWithoutColumnsInput>
  }

  export type DatabaseMetadataUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatabaseMetadataUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutQueryHistoryInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQueryHistoryInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQueryHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQueryHistoryInput, UserUncheckedCreateWithoutQueryHistoryInput>
  }

  export type VisualizationCreateWithoutQueryInput = {
    id?: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualizationUncheckedCreateWithoutQueryInput = {
    id?: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisualizationCreateOrConnectWithoutQueryInput = {
    where: VisualizationWhereUniqueInput
    create: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
  }

  export type UserUpsertWithoutQueryHistoryInput = {
    update: XOR<UserUpdateWithoutQueryHistoryInput, UserUncheckedUpdateWithoutQueryHistoryInput>
    create: XOR<UserCreateWithoutQueryHistoryInput, UserUncheckedCreateWithoutQueryHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQueryHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQueryHistoryInput, UserUncheckedUpdateWithoutQueryHistoryInput>
  }

  export type UserUpdateWithoutQueryHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQueryHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VisualizationUpsertWithoutQueryInput = {
    update: XOR<VisualizationUpdateWithoutQueryInput, VisualizationUncheckedUpdateWithoutQueryInput>
    create: XOR<VisualizationCreateWithoutQueryInput, VisualizationUncheckedCreateWithoutQueryInput>
    where?: VisualizationWhereInput
  }

  export type VisualizationUpdateToOneWithWhereWithoutQueryInput = {
    where?: VisualizationWhereInput
    data: XOR<VisualizationUpdateWithoutQueryInput, VisualizationUncheckedUpdateWithoutQueryInput>
  }

  export type VisualizationUpdateWithoutQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisualizationUncheckedUpdateWithoutQueryInput = {
    id?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QueryHistoryCreateWithoutVisualizationInput = {
    id?: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutQueryHistoryInput
  }

  export type QueryHistoryUncheckedCreateWithoutVisualizationInput = {
    id?: string
    userId: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type QueryHistoryCreateOrConnectWithoutVisualizationInput = {
    where: QueryHistoryWhereUniqueInput
    create: XOR<QueryHistoryCreateWithoutVisualizationInput, QueryHistoryUncheckedCreateWithoutVisualizationInput>
  }

  export type QueryHistoryUpsertWithoutVisualizationInput = {
    update: XOR<QueryHistoryUpdateWithoutVisualizationInput, QueryHistoryUncheckedUpdateWithoutVisualizationInput>
    create: XOR<QueryHistoryCreateWithoutVisualizationInput, QueryHistoryUncheckedCreateWithoutVisualizationInput>
    where?: QueryHistoryWhereInput
  }

  export type QueryHistoryUpdateToOneWithWhereWithoutVisualizationInput = {
    where?: QueryHistoryWhereInput
    data: XOR<QueryHistoryUpdateWithoutVisualizationInput, QueryHistoryUncheckedUpdateWithoutVisualizationInput>
  }

  export type QueryHistoryUpdateWithoutVisualizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutQueryHistoryNestedInput
  }

  export type QueryHistoryUncheckedUpdateWithoutVisualizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetCreateWithoutDashboardInput = {
    id?: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardWidgetUncheckedCreateWithoutDashboardInput = {
    id?: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardWidgetCreateOrConnectWithoutDashboardInput = {
    where: DashboardWidgetWhereUniqueInput
    create: XOR<DashboardWidgetCreateWithoutDashboardInput, DashboardWidgetUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardWidgetCreateManyDashboardInputEnvelope = {
    data: DashboardWidgetCreateManyDashboardInput | DashboardWidgetCreateManyDashboardInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDashboardsInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryCreateNestedManyWithoutUserInput
    settings?: UserSettingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardsInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    settings?: UserSettingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
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

  export type DashboardWidgetScalarWhereInput = {
    AND?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
    OR?: DashboardWidgetScalarWhereInput[]
    NOT?: DashboardWidgetScalarWhereInput | DashboardWidgetScalarWhereInput[]
    id?: StringFilter<"DashboardWidget"> | string
    dashboardId?: StringFilter<"DashboardWidget"> | string
    title?: StringFilter<"DashboardWidget"> | string
    description?: StringNullableFilter<"DashboardWidget"> | string | null
    sqlQuery?: StringFilter<"DashboardWidget"> | string
    chartType?: StringFilter<"DashboardWidget"> | string
    chartOptions?: JsonNullableFilter<"DashboardWidget">
    createdAt?: DateTimeFilter<"DashboardWidget"> | Date | string
    updatedAt?: DateTimeFilter<"DashboardWidget"> | Date | string
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
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    settings?: UserSettingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DashboardCreateWithoutWidgetsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
  }

  export type DashboardUncheckedCreateWithoutWidgetsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardCreateOrConnectWithoutWidgetsInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutWidgetsInput, DashboardUncheckedCreateWithoutWidgetsInput>
  }

  export type DashboardUpsertWithoutWidgetsInput = {
    update: XOR<DashboardUpdateWithoutWidgetsInput, DashboardUncheckedUpdateWithoutWidgetsInput>
    create: XOR<DashboardCreateWithoutWidgetsInput, DashboardUncheckedCreateWithoutWidgetsInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutWidgetsInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutWidgetsInput, DashboardUncheckedUpdateWithoutWidgetsInput>
  }

  export type DashboardUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
  }

  export type DashboardUncheckedUpdateWithoutWidgetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSettingsInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryCreateNestedManyWithoutUserInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSettingsInput = {
    id?: string
    userId?: number
    name: string
    email?: string | null
    password: string
    profilePicture?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    role?: $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedCreateNestedManyWithoutUserInput
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSettingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
  }

  export type UserUpsertWithoutSettingsInput = {
    update: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
    create: XOR<UserCreateWithoutSettingsInput, UserUncheckedCreateWithoutSettingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSettingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSettingsInput, UserUncheckedUpdateWithoutSettingsInput>
  }

  export type UserUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUpdateManyWithoutUserNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSettingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    queryHistory?: QueryHistoryUncheckedUpdateManyWithoutUserNestedInput
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
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

  export type QueryHistoryCreateManyUserInput = {
    id?: string
    userQuery: string
    sqlQuery: string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: number | null
    successful?: boolean
    errorMessage?: string | null
    createdAt?: Date | string
  }

  export type DashboardCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QueryHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visualization?: VisualizationUpdateOneWithoutQueryNestedInput
  }

  export type QueryHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visualization?: VisualizationUncheckedUpdateOneWithoutQueryNestedInput
  }

  export type QueryHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userQuery?: StringFieldUpdateOperationsInput | string
    sqlQuery?: StringFieldUpdateOperationsInput | string
    relatedQueries?: NullableJsonNullValueInput | InputJsonValue
    results?: NullableJsonNullValueInput | InputJsonValue
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    successful?: BoolFieldUpdateOperationsInput | boolean
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: DashboardWidgetUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    widgets?: DashboardWidgetUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnMetadataCreateManyDatabaseMetadataInput = {
    id?: string
    columnName: string
    dataType: string
    description?: string | null
    isIdentifier?: boolean
    isSensitive?: boolean
  }

  export type ColumnMetadataUpdateWithoutDatabaseMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnMetadataUncheckedUpdateWithoutDatabaseMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColumnMetadataUncheckedUpdateManyWithoutDatabaseMetadataInput = {
    id?: StringFieldUpdateOperationsInput | string
    columnName?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isIdentifier?: BoolFieldUpdateOperationsInput | boolean
    isSensitive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DashboardWidgetCreateManyDashboardInput = {
    id?: string
    title: string
    description?: string | null
    sqlQuery: string
    chartType: string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DashboardWidgetUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardWidgetUncheckedUpdateManyWithoutDashboardInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sqlQuery?: StringFieldUpdateOperationsInput | string
    chartType?: StringFieldUpdateOperationsInput | string
    chartOptions?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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