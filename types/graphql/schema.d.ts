export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "children" */
export type Children = {
  __typename?: 'children';
  created_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  grade?: Maybe<Grades>;
  grade_id?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  item_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  name: Scalars['String'];
  /** An array relationship */
  sealChildrenByChildrenId: Array<Seal_Children>;
  /** An aggregate relationship */
  sealChildrenByChildrenId_aggregate: Seal_Children_Aggregate;
  seal_children?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  /** An object relationship */
  user?: Maybe<User>;
  user_id?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "children" */
export type ChildrenItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "children" */
export type ChildrenItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


/** columns and relationships of "children" */
export type ChildrenSealChildrenByChildrenIdArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


/** columns and relationships of "children" */
export type ChildrenSealChildrenByChildrenId_AggregateArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


/** columns and relationships of "children" */
export type ChildrenTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


/** columns and relationships of "children" */
export type ChildrenTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** aggregated selection of "children" */
export type Children_Aggregate = {
  __typename?: 'children_aggregate';
  aggregate?: Maybe<Children_Aggregate_Fields>;
  nodes: Array<Children>;
};

/** aggregate fields of "children" */
export type Children_Aggregate_Fields = {
  __typename?: 'children_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Children_Max_Fields>;
  min?: Maybe<Children_Min_Fields>;
};


/** aggregate fields of "children" */
export type Children_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Children_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "children" */
export type Children_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Children_Max_Order_By>;
  min?: Maybe<Children_Min_Order_By>;
};

/** input type for inserting array relation for remote table "children" */
export type Children_Arr_Rel_Insert_Input = {
  data: Array<Children_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Children_On_Conflict>;
};

/** Boolean expression to filter rows from the table "children". All fields are combined with a logical 'AND'. */
export type Children_Bool_Exp = {
  _and?: Maybe<Array<Children_Bool_Exp>>;
  _not?: Maybe<Children_Bool_Exp>;
  _or?: Maybe<Array<Children_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  grade?: Maybe<Grades_Bool_Exp>;
  grade_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  item_id?: Maybe<Uuid_Comparison_Exp>;
  items?: Maybe<Items_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  sealChildrenByChildrenId?: Maybe<Seal_Children_Bool_Exp>;
  seal_children?: Maybe<Uuid_Comparison_Exp>;
  todo_id?: Maybe<Uuid_Comparison_Exp>;
  todos?: Maybe<Todos_Bool_Exp>;
  user?: Maybe<User_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "children" */
export enum Children_Constraint {
  /** unique or primary key constraint */
  ChildrenGradeIdKey = 'children_grade_id_key',
  /** unique or primary key constraint */
  ChildrenPkey = 'children_pkey'
}

/** input type for inserting data into table "children" */
export type Children_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Grades_Obj_Rel_Insert_Input>;
  grade_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  items?: Maybe<Items_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  sealChildrenByChildrenId?: Maybe<Seal_Children_Arr_Rel_Insert_Input>;
  seal_children?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
  todos?: Maybe<Todos_Arr_Rel_Insert_Input>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Children_Max_Fields = {
  __typename?: 'children_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  grade_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  seal_children?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "children" */
export type Children_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  grade_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seal_children?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Children_Min_Fields = {
  __typename?: 'children_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  grade_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  seal_children?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "children" */
export type Children_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  grade_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  seal_children?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "children" */
export type Children_Mutation_Response = {
  __typename?: 'children_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Children>;
};

/** input type for inserting object relation for remote table "children" */
export type Children_Obj_Rel_Insert_Input = {
  data: Children_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Children_On_Conflict>;
};

/** on conflict condition type for table "children" */
export type Children_On_Conflict = {
  constraint: Children_Constraint;
  update_columns?: Array<Children_Update_Column>;
  where?: Maybe<Children_Bool_Exp>;
};

/** Ordering options when selecting data from "children". */
export type Children_Order_By = {
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Grades_Order_By>;
  grade_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item_id?: Maybe<Order_By>;
  items_aggregate?: Maybe<Items_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  sealChildrenByChildrenId_aggregate?: Maybe<Seal_Children_Aggregate_Order_By>;
  seal_children?: Maybe<Order_By>;
  todo_id?: Maybe<Order_By>;
  todos_aggregate?: Maybe<Todos_Aggregate_Order_By>;
  user?: Maybe<User_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: children */
export type Children_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "children" */
export enum Children_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradeId = 'grade_id',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Name = 'name',
  /** column name */
  SealChildren = 'seal_children',
  /** column name */
  TodoId = 'todo_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "children" */
export type Children_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  grade_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  item_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  seal_children?: Maybe<Scalars['uuid']>;
  todo_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "children" */
export enum Children_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GradeId = 'grade_id',
  /** column name */
  Id = 'id',
  /** column name */
  ItemId = 'item_id',
  /** column name */
  Name = 'name',
  /** column name */
  SealChildren = 'seal_children',
  /** column name */
  TodoId = 'todo_id',
  /** column name */
  UserId = 'user_id'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "grades" */
export type Grades = {
  __typename?: 'grades';
  /** An object relationship */
  child?: Maybe<Children>;
  created_at: Scalars['timestamptz'];
  grade: Scalars['String'];
  id: Scalars['uuid'];
};

/** aggregated selection of "grades" */
export type Grades_Aggregate = {
  __typename?: 'grades_aggregate';
  aggregate?: Maybe<Grades_Aggregate_Fields>;
  nodes: Array<Grades>;
};

/** aggregate fields of "grades" */
export type Grades_Aggregate_Fields = {
  __typename?: 'grades_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Grades_Max_Fields>;
  min?: Maybe<Grades_Min_Fields>;
};


/** aggregate fields of "grades" */
export type Grades_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Grades_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "grades". All fields are combined with a logical 'AND'. */
export type Grades_Bool_Exp = {
  _and?: Maybe<Array<Grades_Bool_Exp>>;
  _not?: Maybe<Grades_Bool_Exp>;
  _or?: Maybe<Array<Grades_Bool_Exp>>;
  child?: Maybe<Children_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  grade?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "grades" */
export enum Grades_Constraint {
  /** unique or primary key constraint */
  GradesPkey = 'grades_pkey'
}

/** input type for inserting data into table "grades" */
export type Grades_Insert_Input = {
  child?: Maybe<Children_Obj_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Grades_Max_Fields = {
  __typename?: 'grades_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Grades_Min_Fields = {
  __typename?: 'grades_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "grades" */
export type Grades_Mutation_Response = {
  __typename?: 'grades_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Grades>;
};

/** input type for inserting object relation for remote table "grades" */
export type Grades_Obj_Rel_Insert_Input = {
  data: Grades_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Grades_On_Conflict>;
};

/** on conflict condition type for table "grades" */
export type Grades_On_Conflict = {
  constraint: Grades_Constraint;
  update_columns?: Array<Grades_Update_Column>;
  where?: Maybe<Grades_Bool_Exp>;
};

/** Ordering options when selecting data from "grades". */
export type Grades_Order_By = {
  child?: Maybe<Children_Order_By>;
  created_at?: Maybe<Order_By>;
  grade?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: grades */
export type Grades_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "grades" */
export enum Grades_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "grades" */
export type Grades_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  grade?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "grades" */
export enum Grades_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Grade = 'grade',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "items" */
export type Items = {
  __typename?: 'items';
  /** An object relationship */
  child?: Maybe<Children>;
  child_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  item: Scalars['String'];
  limited_day: Scalars['date'];
};

/** aggregated selection of "items" */
export type Items_Aggregate = {
  __typename?: 'items_aggregate';
  aggregate?: Maybe<Items_Aggregate_Fields>;
  nodes: Array<Items>;
};

/** aggregate fields of "items" */
export type Items_Aggregate_Fields = {
  __typename?: 'items_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Items_Max_Fields>;
  min?: Maybe<Items_Min_Fields>;
};


/** aggregate fields of "items" */
export type Items_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Items_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "items" */
export type Items_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Items_Max_Order_By>;
  min?: Maybe<Items_Min_Order_By>;
};

/** input type for inserting array relation for remote table "items" */
export type Items_Arr_Rel_Insert_Input = {
  data: Array<Items_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Items_On_Conflict>;
};

/** Boolean expression to filter rows from the table "items". All fields are combined with a logical 'AND'. */
export type Items_Bool_Exp = {
  _and?: Maybe<Array<Items_Bool_Exp>>;
  _not?: Maybe<Items_Bool_Exp>;
  _or?: Maybe<Array<Items_Bool_Exp>>;
  child?: Maybe<Children_Bool_Exp>;
  child_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamp_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  item?: Maybe<String_Comparison_Exp>;
  limited_day?: Maybe<Date_Comparison_Exp>;
};

/** unique or primary key constraints on table "items" */
export enum Items_Constraint {
  /** unique or primary key constraint */
  ItemsPkey = 'items_pkey'
}

/** input type for inserting data into table "items" */
export type Items_Insert_Input = {
  child?: Maybe<Children_Obj_Rel_Insert_Input>;
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  item?: Maybe<Scalars['String']>;
  limited_day?: Maybe<Scalars['date']>;
};

/** aggregate max on columns */
export type Items_Max_Fields = {
  __typename?: 'items_max_fields';
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  item?: Maybe<Scalars['String']>;
  limited_day?: Maybe<Scalars['date']>;
};

/** order by max() on columns of table "items" */
export type Items_Max_Order_By = {
  child_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item?: Maybe<Order_By>;
  limited_day?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Items_Min_Fields = {
  __typename?: 'items_min_fields';
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  item?: Maybe<Scalars['String']>;
  limited_day?: Maybe<Scalars['date']>;
};

/** order by min() on columns of table "items" */
export type Items_Min_Order_By = {
  child_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item?: Maybe<Order_By>;
  limited_day?: Maybe<Order_By>;
};

/** response of any mutation on the table "items" */
export type Items_Mutation_Response = {
  __typename?: 'items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Items>;
};

/** on conflict condition type for table "items" */
export type Items_On_Conflict = {
  constraint: Items_Constraint;
  update_columns?: Array<Items_Update_Column>;
  where?: Maybe<Items_Bool_Exp>;
};

/** Ordering options when selecting data from "items". */
export type Items_Order_By = {
  child?: Maybe<Children_Order_By>;
  child_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  item?: Maybe<Order_By>;
  limited_day?: Maybe<Order_By>;
};

/** primary key columns input for table: items */
export type Items_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "items" */
export enum Items_Select_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Item = 'item',
  /** column name */
  LimitedDay = 'limited_day'
}

/** input type for updating data in table "items" */
export type Items_Set_Input = {
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  item?: Maybe<Scalars['String']>;
  limited_day?: Maybe<Scalars['date']>;
};

/** update columns of table "items" */
export enum Items_Update_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Item = 'item',
  /** column name */
  LimitedDay = 'limited_day'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "children" */
  delete_children?: Maybe<Children_Mutation_Response>;
  /** delete single row from the table: "children" */
  delete_children_by_pk?: Maybe<Children>;
  /** delete data from the table: "grades" */
  delete_grades?: Maybe<Grades_Mutation_Response>;
  /** delete single row from the table: "grades" */
  delete_grades_by_pk?: Maybe<Grades>;
  /** delete data from the table: "items" */
  delete_items?: Maybe<Items_Mutation_Response>;
  /** delete single row from the table: "items" */
  delete_items_by_pk?: Maybe<Items>;
  /** delete data from the table: "seal_children" */
  delete_seal_children?: Maybe<Seal_Children_Mutation_Response>;
  /** delete single row from the table: "seal_children" */
  delete_seal_children_by_pk?: Maybe<Seal_Children>;
  /** delete data from the table: "seals" */
  delete_seals?: Maybe<Seals_Mutation_Response>;
  /** delete single row from the table: "seals" */
  delete_seals_by_pk?: Maybe<Seals>;
  /** delete data from the table: "todos" */
  delete_todos?: Maybe<Todos_Mutation_Response>;
  /** delete single row from the table: "todos" */
  delete_todos_by_pk?: Maybe<Todos>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "children" */
  insert_children?: Maybe<Children_Mutation_Response>;
  /** insert a single row into the table: "children" */
  insert_children_one?: Maybe<Children>;
  /** insert data into the table: "grades" */
  insert_grades?: Maybe<Grades_Mutation_Response>;
  /** insert a single row into the table: "grades" */
  insert_grades_one?: Maybe<Grades>;
  /** insert data into the table: "items" */
  insert_items?: Maybe<Items_Mutation_Response>;
  /** insert a single row into the table: "items" */
  insert_items_one?: Maybe<Items>;
  /** insert data into the table: "seal_children" */
  insert_seal_children?: Maybe<Seal_Children_Mutation_Response>;
  /** insert a single row into the table: "seal_children" */
  insert_seal_children_one?: Maybe<Seal_Children>;
  /** insert data into the table: "seals" */
  insert_seals?: Maybe<Seals_Mutation_Response>;
  /** insert a single row into the table: "seals" */
  insert_seals_one?: Maybe<Seals>;
  /** insert data into the table: "todos" */
  insert_todos?: Maybe<Todos_Mutation_Response>;
  /** insert a single row into the table: "todos" */
  insert_todos_one?: Maybe<Todos>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "children" */
  update_children?: Maybe<Children_Mutation_Response>;
  /** update single row of the table: "children" */
  update_children_by_pk?: Maybe<Children>;
  /** update data of the table: "grades" */
  update_grades?: Maybe<Grades_Mutation_Response>;
  /** update single row of the table: "grades" */
  update_grades_by_pk?: Maybe<Grades>;
  /** update data of the table: "items" */
  update_items?: Maybe<Items_Mutation_Response>;
  /** update single row of the table: "items" */
  update_items_by_pk?: Maybe<Items>;
  /** update data of the table: "seal_children" */
  update_seal_children?: Maybe<Seal_Children_Mutation_Response>;
  /** update single row of the table: "seal_children" */
  update_seal_children_by_pk?: Maybe<Seal_Children>;
  /** update data of the table: "seals" */
  update_seals?: Maybe<Seals_Mutation_Response>;
  /** update single row of the table: "seals" */
  update_seals_by_pk?: Maybe<Seals>;
  /** update data of the table: "todos" */
  update_todos?: Maybe<Todos_Mutation_Response>;
  /** update single row of the table: "todos" */
  update_todos_by_pk?: Maybe<Todos>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type Mutation_RootDelete_ChildrenArgs = {
  where: Children_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Children_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_GradesArgs = {
  where: Grades_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grades_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ItemsArgs = {
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Items_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Seal_ChildrenArgs = {
  where: Seal_Children_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seal_Children_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SealsArgs = {
  where: Seals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Seals_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TodosArgs = {
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Todos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ChildrenArgs = {
  objects: Array<Children_Insert_Input>;
  on_conflict?: Maybe<Children_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Children_OneArgs = {
  object: Children_Insert_Input;
  on_conflict?: Maybe<Children_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GradesArgs = {
  objects: Array<Grades_Insert_Input>;
  on_conflict?: Maybe<Grades_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grades_OneArgs = {
  object: Grades_Insert_Input;
  on_conflict?: Maybe<Grades_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ItemsArgs = {
  objects: Array<Items_Insert_Input>;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Items_OneArgs = {
  object: Items_Insert_Input;
  on_conflict?: Maybe<Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seal_ChildrenArgs = {
  objects: Array<Seal_Children_Insert_Input>;
  on_conflict?: Maybe<Seal_Children_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seal_Children_OneArgs = {
  object: Seal_Children_Insert_Input;
  on_conflict?: Maybe<Seal_Children_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SealsArgs = {
  objects: Array<Seals_Insert_Input>;
  on_conflict?: Maybe<Seals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Seals_OneArgs = {
  object: Seals_Insert_Input;
  on_conflict?: Maybe<Seals_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TodosArgs = {
  objects: Array<Todos_Insert_Input>;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Todos_OneArgs = {
  object: Todos_Insert_Input;
  on_conflict?: Maybe<Todos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ChildrenArgs = {
  _set?: Maybe<Children_Set_Input>;
  where: Children_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Children_By_PkArgs = {
  _set?: Maybe<Children_Set_Input>;
  pk_columns: Children_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_GradesArgs = {
  _set?: Maybe<Grades_Set_Input>;
  where: Grades_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grades_By_PkArgs = {
  _set?: Maybe<Grades_Set_Input>;
  pk_columns: Grades_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ItemsArgs = {
  _set?: Maybe<Items_Set_Input>;
  where: Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Items_By_PkArgs = {
  _set?: Maybe<Items_Set_Input>;
  pk_columns: Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Seal_ChildrenArgs = {
  _set?: Maybe<Seal_Children_Set_Input>;
  where: Seal_Children_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seal_Children_By_PkArgs = {
  _set?: Maybe<Seal_Children_Set_Input>;
  pk_columns: Seal_Children_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SealsArgs = {
  _inc?: Maybe<Seals_Inc_Input>;
  _set?: Maybe<Seals_Set_Input>;
  where: Seals_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Seals_By_PkArgs = {
  _inc?: Maybe<Seals_Inc_Input>;
  _set?: Maybe<Seals_Set_Input>;
  pk_columns: Seals_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TodosArgs = {
  _set?: Maybe<Todos_Set_Input>;
  where: Todos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Todos_By_PkArgs = {
  _set?: Maybe<Todos_Set_Input>;
  pk_columns: Todos_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  children: Array<Children>;
  /** An aggregate relationship */
  children_aggregate: Children_Aggregate;
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>;
  /** fetch data from the table: "grades" */
  grades: Array<Grades>;
  /** fetch aggregated fields from the table: "grades" */
  grades_aggregate: Grades_Aggregate;
  /** fetch data from the table: "grades" using primary key columns */
  grades_by_pk?: Maybe<Grades>;
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** An array relationship */
  seal_children: Array<Seal_Children>;
  /** An aggregate relationship */
  seal_children_aggregate: Seal_Children_Aggregate;
  /** fetch data from the table: "seal_children" using primary key columns */
  seal_children_by_pk?: Maybe<Seal_Children>;
  /** fetch data from the table: "seals" */
  seals: Array<Seals>;
  /** fetch aggregated fields from the table: "seals" */
  seals_aggregate: Seals_Aggregate;
  /** fetch data from the table: "seals" using primary key columns */
  seals_by_pk?: Maybe<Seals>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Query_RootChildrenArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};


export type Query_RootChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};


export type Query_RootChildren_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGradesArgs = {
  distinct_on?: Maybe<Array<Grades_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grades_Order_By>>;
  where?: Maybe<Grades_Bool_Exp>;
};


export type Query_RootGrades_AggregateArgs = {
  distinct_on?: Maybe<Array<Grades_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grades_Order_By>>;
  where?: Maybe<Grades_Bool_Exp>;
};


export type Query_RootGrades_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Query_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSeal_ChildrenArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


export type Query_RootSeal_Children_AggregateArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


export type Query_RootSeal_Children_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSealsArgs = {
  distinct_on?: Maybe<Array<Seals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seals_Order_By>>;
  where?: Maybe<Seals_Bool_Exp>;
};


export type Query_RootSeals_AggregateArgs = {
  distinct_on?: Maybe<Array<Seals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seals_Order_By>>;
  where?: Maybe<Seals_Bool_Exp>;
};


export type Query_RootSeals_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Query_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "seal_children" */
export type Seal_Children = {
  __typename?: 'seal_children';
  /** An object relationship */
  child?: Maybe<Children>;
  children_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  seal?: Maybe<Seals>;
  seal_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "seal_children" */
export type Seal_Children_Aggregate = {
  __typename?: 'seal_children_aggregate';
  aggregate?: Maybe<Seal_Children_Aggregate_Fields>;
  nodes: Array<Seal_Children>;
};

/** aggregate fields of "seal_children" */
export type Seal_Children_Aggregate_Fields = {
  __typename?: 'seal_children_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Seal_Children_Max_Fields>;
  min?: Maybe<Seal_Children_Min_Fields>;
};


/** aggregate fields of "seal_children" */
export type Seal_Children_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Seal_Children_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "seal_children" */
export type Seal_Children_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Seal_Children_Max_Order_By>;
  min?: Maybe<Seal_Children_Min_Order_By>;
};

/** input type for inserting array relation for remote table "seal_children" */
export type Seal_Children_Arr_Rel_Insert_Input = {
  data: Array<Seal_Children_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Seal_Children_On_Conflict>;
};

/** Boolean expression to filter rows from the table "seal_children". All fields are combined with a logical 'AND'. */
export type Seal_Children_Bool_Exp = {
  _and?: Maybe<Array<Seal_Children_Bool_Exp>>;
  _not?: Maybe<Seal_Children_Bool_Exp>;
  _or?: Maybe<Array<Seal_Children_Bool_Exp>>;
  child?: Maybe<Children_Bool_Exp>;
  children_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  seal?: Maybe<Seals_Bool_Exp>;
  seal_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "seal_children" */
export enum Seal_Children_Constraint {
  /** unique or primary key constraint */
  SealChildrenPkey = 'seal_children_pkey'
}

/** input type for inserting data into table "seal_children" */
export type Seal_Children_Insert_Input = {
  child?: Maybe<Children_Obj_Rel_Insert_Input>;
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  seal?: Maybe<Seals_Obj_Rel_Insert_Input>;
  seal_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Seal_Children_Max_Fields = {
  __typename?: 'seal_children_max_fields';
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  seal_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "seal_children" */
export type Seal_Children_Max_Order_By = {
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  seal_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Seal_Children_Min_Fields = {
  __typename?: 'seal_children_min_fields';
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  seal_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "seal_children" */
export type Seal_Children_Min_Order_By = {
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  seal_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "seal_children" */
export type Seal_Children_Mutation_Response = {
  __typename?: 'seal_children_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Seal_Children>;
};

/** on conflict condition type for table "seal_children" */
export type Seal_Children_On_Conflict = {
  constraint: Seal_Children_Constraint;
  update_columns?: Array<Seal_Children_Update_Column>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};

/** Ordering options when selecting data from "seal_children". */
export type Seal_Children_Order_By = {
  child?: Maybe<Children_Order_By>;
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  seal?: Maybe<Seals_Order_By>;
  seal_id?: Maybe<Order_By>;
};

/** primary key columns input for table: seal_children */
export type Seal_Children_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "seal_children" */
export enum Seal_Children_Select_Column {
  /** column name */
  ChildrenId = 'children_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SealId = 'seal_id'
}

/** input type for updating data in table "seal_children" */
export type Seal_Children_Set_Input = {
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  seal_id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "seal_children" */
export enum Seal_Children_Update_Column {
  /** column name */
  ChildrenId = 'children_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SealId = 'seal_id'
}

/** columns and relationships of "seals" */
export type Seals = {
  __typename?: 'seals';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  rate: Scalars['Int'];
  /** An array relationship */
  seal_children: Array<Seal_Children>;
  /** An aggregate relationship */
  seal_children_aggregate: Seal_Children_Aggregate;
};


/** columns and relationships of "seals" */
export type SealsSeal_ChildrenArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


/** columns and relationships of "seals" */
export type SealsSeal_Children_AggregateArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};

/** aggregated selection of "seals" */
export type Seals_Aggregate = {
  __typename?: 'seals_aggregate';
  aggregate?: Maybe<Seals_Aggregate_Fields>;
  nodes: Array<Seals>;
};

/** aggregate fields of "seals" */
export type Seals_Aggregate_Fields = {
  __typename?: 'seals_aggregate_fields';
  avg?: Maybe<Seals_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Seals_Max_Fields>;
  min?: Maybe<Seals_Min_Fields>;
  stddev?: Maybe<Seals_Stddev_Fields>;
  stddev_pop?: Maybe<Seals_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Seals_Stddev_Samp_Fields>;
  sum?: Maybe<Seals_Sum_Fields>;
  var_pop?: Maybe<Seals_Var_Pop_Fields>;
  var_samp?: Maybe<Seals_Var_Samp_Fields>;
  variance?: Maybe<Seals_Variance_Fields>;
};


/** aggregate fields of "seals" */
export type Seals_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Seals_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Seals_Avg_Fields = {
  __typename?: 'seals_avg_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "seals". All fields are combined with a logical 'AND'. */
export type Seals_Bool_Exp = {
  _and?: Maybe<Array<Seals_Bool_Exp>>;
  _not?: Maybe<Seals_Bool_Exp>;
  _or?: Maybe<Array<Seals_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  rate?: Maybe<Int_Comparison_Exp>;
  seal_children?: Maybe<Seal_Children_Bool_Exp>;
};

/** unique or primary key constraints on table "seals" */
export enum Seals_Constraint {
  /** unique or primary key constraint */
  SealsPkey = 'seals_pkey'
}

/** input type for incrementing numeric columns in table "seals" */
export type Seals_Inc_Input = {
  rate?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "seals" */
export type Seals_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  seal_children?: Maybe<Seal_Children_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Seals_Max_Fields = {
  __typename?: 'seals_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Seals_Min_Fields = {
  __typename?: 'seals_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "seals" */
export type Seals_Mutation_Response = {
  __typename?: 'seals_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Seals>;
};

/** input type for inserting object relation for remote table "seals" */
export type Seals_Obj_Rel_Insert_Input = {
  data: Seals_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Seals_On_Conflict>;
};

/** on conflict condition type for table "seals" */
export type Seals_On_Conflict = {
  constraint: Seals_Constraint;
  update_columns?: Array<Seals_Update_Column>;
  where?: Maybe<Seals_Bool_Exp>;
};

/** Ordering options when selecting data from "seals". */
export type Seals_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  rate?: Maybe<Order_By>;
  seal_children_aggregate?: Maybe<Seal_Children_Aggregate_Order_By>;
};

/** primary key columns input for table: seals */
export type Seals_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "seals" */
export enum Seals_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate'
}

/** input type for updating data in table "seals" */
export type Seals_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Seals_Stddev_Fields = {
  __typename?: 'seals_stddev_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Seals_Stddev_Pop_Fields = {
  __typename?: 'seals_stddev_pop_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Seals_Stddev_Samp_Fields = {
  __typename?: 'seals_stddev_samp_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Seals_Sum_Fields = {
  __typename?: 'seals_sum_fields';
  rate?: Maybe<Scalars['Int']>;
};

/** update columns of table "seals" */
export enum Seals_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rate = 'rate'
}

/** aggregate var_pop on columns */
export type Seals_Var_Pop_Fields = {
  __typename?: 'seals_var_pop_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Seals_Var_Samp_Fields = {
  __typename?: 'seals_var_samp_fields';
  rate?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Seals_Variance_Fields = {
  __typename?: 'seals_variance_fields';
  rate?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  children: Array<Children>;
  /** An aggregate relationship */
  children_aggregate: Children_Aggregate;
  /** fetch data from the table: "children" using primary key columns */
  children_by_pk?: Maybe<Children>;
  /** fetch data from the table: "grades" */
  grades: Array<Grades>;
  /** fetch aggregated fields from the table: "grades" */
  grades_aggregate: Grades_Aggregate;
  /** fetch data from the table: "grades" using primary key columns */
  grades_by_pk?: Maybe<Grades>;
  /** An array relationship */
  items: Array<Items>;
  /** An aggregate relationship */
  items_aggregate: Items_Aggregate;
  /** fetch data from the table: "items" using primary key columns */
  items_by_pk?: Maybe<Items>;
  /** An array relationship */
  seal_children: Array<Seal_Children>;
  /** An aggregate relationship */
  seal_children_aggregate: Seal_Children_Aggregate;
  /** fetch data from the table: "seal_children" using primary key columns */
  seal_children_by_pk?: Maybe<Seal_Children>;
  /** fetch data from the table: "seals" */
  seals: Array<Seals>;
  /** fetch aggregated fields from the table: "seals" */
  seals_aggregate: Seals_Aggregate;
  /** fetch data from the table: "seals" using primary key columns */
  seals_by_pk?: Maybe<Seals>;
  /** An array relationship */
  todos: Array<Todos>;
  /** An aggregate relationship */
  todos_aggregate: Todos_Aggregate;
  /** fetch data from the table: "todos" using primary key columns */
  todos_by_pk?: Maybe<Todos>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type Subscription_RootChildrenArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};


export type Subscription_RootChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};


export type Subscription_RootChildren_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGradesArgs = {
  distinct_on?: Maybe<Array<Grades_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grades_Order_By>>;
  where?: Maybe<Grades_Bool_Exp>;
};


export type Subscription_RootGrades_AggregateArgs = {
  distinct_on?: Maybe<Array<Grades_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Grades_Order_By>>;
  where?: Maybe<Grades_Bool_Exp>;
};


export type Subscription_RootGrades_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootItemsArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_AggregateArgs = {
  distinct_on?: Maybe<Array<Items_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Items_Order_By>>;
  where?: Maybe<Items_Bool_Exp>;
};


export type Subscription_RootItems_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSeal_ChildrenArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


export type Subscription_RootSeal_Children_AggregateArgs = {
  distinct_on?: Maybe<Array<Seal_Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seal_Children_Order_By>>;
  where?: Maybe<Seal_Children_Bool_Exp>;
};


export type Subscription_RootSeal_Children_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootSealsArgs = {
  distinct_on?: Maybe<Array<Seals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seals_Order_By>>;
  where?: Maybe<Seals_Bool_Exp>;
};


export type Subscription_RootSeals_AggregateArgs = {
  distinct_on?: Maybe<Array<Seals_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Seals_Order_By>>;
  where?: Maybe<Seals_Bool_Exp>;
};


export type Subscription_RootSeals_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todos_Order_By>>;
  where?: Maybe<Todos_Bool_Exp>;
};


export type Subscription_RootTodos_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "todos" */
export type Todos = {
  __typename?: 'todos';
  /** An object relationship */
  child?: Maybe<Children>;
  children_id?: Maybe<Scalars['uuid']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
};

/** aggregated selection of "todos" */
export type Todos_Aggregate = {
  __typename?: 'todos_aggregate';
  aggregate?: Maybe<Todos_Aggregate_Fields>;
  nodes: Array<Todos>;
};

/** aggregate fields of "todos" */
export type Todos_Aggregate_Fields = {
  __typename?: 'todos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Todos_Max_Fields>;
  min?: Maybe<Todos_Min_Fields>;
};


/** aggregate fields of "todos" */
export type Todos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "todos" */
export type Todos_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Todos_Max_Order_By>;
  min?: Maybe<Todos_Min_Order_By>;
};

/** input type for inserting array relation for remote table "todos" */
export type Todos_Arr_Rel_Insert_Input = {
  data: Array<Todos_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Todos_On_Conflict>;
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todos_Bool_Exp = {
  _and?: Maybe<Array<Todos_Bool_Exp>>;
  _not?: Maybe<Todos_Bool_Exp>;
  _or?: Maybe<Array<Todos_Bool_Exp>>;
  child?: Maybe<Children_Bool_Exp>;
  children_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todos_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for inserting data into table "todos" */
export type Todos_Insert_Input = {
  child?: Maybe<Children_Obj_Rel_Insert_Input>;
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Todos_Max_Fields = {
  __typename?: 'todos_max_fields';
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "todos" */
export type Todos_Max_Order_By = {
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Todos_Min_Fields = {
  __typename?: 'todos_min_fields';
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "todos" */
export type Todos_Min_Order_By = {
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "todos" */
export type Todos_Mutation_Response = {
  __typename?: 'todos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todos>;
};

/** on conflict condition type for table "todos" */
export type Todos_On_Conflict = {
  constraint: Todos_Constraint;
  update_columns?: Array<Todos_Update_Column>;
  where?: Maybe<Todos_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todos_Order_By = {
  child?: Maybe<Children_Order_By>;
  children_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: todos */
export type Todos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "todos" */
export enum Todos_Select_Column {
  /** column name */
  ChildrenId = 'children_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "todos" */
export type Todos_Set_Input = {
  children_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "todos" */
export enum Todos_Update_Column {
  /** column name */
  ChildrenId = 'children_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  child_id?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  children: Array<Children>;
  /** An aggregate relationship */
  children_aggregate: Children_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  password: Scalars['String'];
};


/** columns and relationships of "user" */
export type UserChildrenArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserChildren_AggregateArgs = {
  distinct_on?: Maybe<Array<Children_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Children_Order_By>>;
  where?: Maybe<Children_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  child_id?: Maybe<Uuid_Comparison_Exp>;
  children?: Maybe<Children_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  child_id?: Maybe<Scalars['uuid']>;
  children?: Maybe<Children_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  child_id?: Maybe<Order_By>;
  children_aggregate?: Maybe<Children_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  child_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  ChildId = 'child_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
