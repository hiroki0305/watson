import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  bigint: any
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars['bigint']>
  _gt?: Maybe<Scalars['bigint']>
  _gte?: Maybe<Scalars['bigint']>
  _in?: Maybe<Array<Scalars['bigint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['bigint']>
  _lte?: Maybe<Scalars['bigint']>
  _neq?: Maybe<Scalars['bigint']>
  _nin?: Maybe<Array<Scalars['bigint']>>
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root'
  /** delete data from the table: "question" */
  delete_question?: Maybe<QuestionMutationResponse>
  /** delete single row from the table: "question" */
  delete_question_by_pk?: Maybe<Question>
  /** delete data from the table: "question_tag" */
  delete_question_tag?: Maybe<QuestionTagMutationResponse>
  /** delete single row from the table: "question_tag" */
  delete_question_tag_by_pk?: Maybe<QuestionTag>
  /** delete data from the table: "tag" */
  delete_tag?: Maybe<TagMutationResponse>
  /** delete single row from the table: "tag" */
  delete_tag_by_pk?: Maybe<Tag>
  /** delete data from the table: "test" */
  delete_test?: Maybe<TestMutationResponse>
  /** delete single row from the table: "test" */
  delete_test_by_pk?: Maybe<Test>
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>
  /** insert data into the table: "question" */
  insert_question?: Maybe<QuestionMutationResponse>
  /** insert a single row into the table: "question" */
  insert_question_one?: Maybe<Question>
  /** insert data into the table: "question_tag" */
  insert_question_tag?: Maybe<QuestionTagMutationResponse>
  /** insert a single row into the table: "question_tag" */
  insert_question_tag_one?: Maybe<QuestionTag>
  /** insert data into the table: "tag" */
  insert_tag?: Maybe<TagMutationResponse>
  /** insert a single row into the table: "tag" */
  insert_tag_one?: Maybe<Tag>
  /** insert data into the table: "test" */
  insert_test?: Maybe<TestMutationResponse>
  /** insert a single row into the table: "test" */
  insert_test_one?: Maybe<Test>
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>
  /** update data of the table: "question" */
  update_question?: Maybe<QuestionMutationResponse>
  /** update single row of the table: "question" */
  update_question_by_pk?: Maybe<Question>
  /** update data of the table: "question_tag" */
  update_question_tag?: Maybe<QuestionTagMutationResponse>
  /** update single row of the table: "question_tag" */
  update_question_tag_by_pk?: Maybe<QuestionTag>
  /** update data of the table: "tag" */
  update_tag?: Maybe<TagMutationResponse>
  /** update single row of the table: "tag" */
  update_tag_by_pk?: Maybe<Tag>
  /** update data of the table: "test" */
  update_test?: Maybe<TestMutationResponse>
  /** update single row of the table: "test" */
  update_test_by_pk?: Maybe<Test>
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>
}

/** mutation root */
export type MutationRootDeleteQuestionArgs = {
  where: QuestionBoolExp
}

/** mutation root */
export type MutationRootDeleteQuestionByPkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type MutationRootDeleteQuestionTagArgs = {
  where: QuestionTagBoolExp
}

/** mutation root */
export type MutationRootDeleteQuestionTagByPkArgs = {
  question_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** mutation root */
export type MutationRootDeleteTagArgs = {
  where: TagBoolExp
}

/** mutation root */
export type MutationRootDeleteTagByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type MutationRootDeleteTestArgs = {
  where: TestBoolExp
}

/** mutation root */
export type MutationRootDeleteTestByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp
}

/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['Int']
}

/** mutation root */
export type MutationRootInsertQuestionArgs = {
  objects: Array<QuestionInsertInput>
  on_conflict?: Maybe<QuestionOnConflict>
}

/** mutation root */
export type MutationRootInsertQuestionOneArgs = {
  object: QuestionInsertInput
  on_conflict?: Maybe<QuestionOnConflict>
}

/** mutation root */
export type MutationRootInsertQuestionTagArgs = {
  objects: Array<QuestionTagInsertInput>
  on_conflict?: Maybe<QuestionTagOnConflict>
}

/** mutation root */
export type MutationRootInsertQuestionTagOneArgs = {
  object: QuestionTagInsertInput
  on_conflict?: Maybe<QuestionTagOnConflict>
}

/** mutation root */
export type MutationRootInsertTagArgs = {
  objects: Array<TagInsertInput>
  on_conflict?: Maybe<TagOnConflict>
}

/** mutation root */
export type MutationRootInsertTagOneArgs = {
  object: TagInsertInput
  on_conflict?: Maybe<TagOnConflict>
}

/** mutation root */
export type MutationRootInsertTestArgs = {
  objects: Array<TestInsertInput>
  on_conflict?: Maybe<TestOnConflict>
}

/** mutation root */
export type MutationRootInsertTestOneArgs = {
  object: TestInsertInput
  on_conflict?: Maybe<TestOnConflict>
}

/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>
  on_conflict?: Maybe<UserOnConflict>
}

/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput
  on_conflict?: Maybe<UserOnConflict>
}

/** mutation root */
export type MutationRootUpdateQuestionArgs = {
  _inc?: Maybe<QuestionIncInput>
  _set?: Maybe<QuestionSetInput>
  where: QuestionBoolExp
}

/** mutation root */
export type MutationRootUpdateQuestionByPkArgs = {
  _inc?: Maybe<QuestionIncInput>
  _set?: Maybe<QuestionSetInput>
  pk_columns: QuestionPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateQuestionTagArgs = {
  _inc?: Maybe<QuestionTagIncInput>
  _set?: Maybe<QuestionTagSetInput>
  where: QuestionTagBoolExp
}

/** mutation root */
export type MutationRootUpdateQuestionTagByPkArgs = {
  _inc?: Maybe<QuestionTagIncInput>
  _set?: Maybe<QuestionTagSetInput>
  pk_columns: QuestionTagPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateTagArgs = {
  _inc?: Maybe<TagIncInput>
  _set?: Maybe<TagSetInput>
  where: TagBoolExp
}

/** mutation root */
export type MutationRootUpdateTagByPkArgs = {
  _inc?: Maybe<TagIncInput>
  _set?: Maybe<TagSetInput>
  pk_columns: TagPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateTestArgs = {
  _inc?: Maybe<TestIncInput>
  _set?: Maybe<TestSetInput>
  where: TestBoolExp
}

/** mutation root */
export type MutationRootUpdateTestByPkArgs = {
  _inc?: Maybe<TestIncInput>
  _set?: Maybe<TestSetInput>
  pk_columns: TestPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateUserArgs = {
  _inc?: Maybe<UserIncInput>
  _set?: Maybe<UserSetInput>
  where: UserBoolExp
}

/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _inc?: Maybe<UserIncInput>
  _set?: Maybe<UserSetInput>
  pk_columns: UserPkColumnsInput
}

/** column ordering options */
export enum OrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type QueryRoot = {
  __typename?: 'query_root'
  /** fetch data from the table: "question" */
  question: Array<Question>
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: QuestionAggregate
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>
  /** fetch data from the table: "question_tag" */
  question_tag: Array<QuestionTag>
  /** fetch aggregated fields from the table: "question_tag" */
  question_tag_aggregate: QuestionTagAggregate
  /** fetch data from the table: "question_tag" using primary key columns */
  question_tag_by_pk?: Maybe<QuestionTag>
  /** fetch data from the table: "tag" */
  tag: Array<Tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: TagAggregate
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>
  /** fetch data from the table: "test" */
  test: Array<Test>
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: TestAggregate
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

/** query root */
export type QueryRootQuestionArgs = {
  distinct_on?: Maybe<Array<QuestionSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionOrderBy>>
  where?: Maybe<QuestionBoolExp>
}

/** query root */
export type QueryRootQuestionAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionOrderBy>>
  where?: Maybe<QuestionBoolExp>
}

/** query root */
export type QueryRootQuestionByPkArgs = {
  id: Scalars['bigint']
}

/** query root */
export type QueryRootQuestionTagArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** query root */
export type QueryRootQuestionTagAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** query root */
export type QueryRootQuestionTagByPkArgs = {
  question_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** query root */
export type QueryRootTagArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TagOrderBy>>
  where?: Maybe<TagBoolExp>
}

/** query root */
export type QueryRootTagAggregateArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TagOrderBy>>
  where?: Maybe<TagBoolExp>
}

/** query root */
export type QueryRootTagByPkArgs = {
  id: Scalars['Int']
}

/** query root */
export type QueryRootTestArgs = {
  distinct_on?: Maybe<Array<TestSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TestOrderBy>>
  where?: Maybe<TestBoolExp>
}

/** query root */
export type QueryRootTestAggregateArgs = {
  distinct_on?: Maybe<Array<TestSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TestOrderBy>>
  where?: Maybe<TestBoolExp>
}

/** query root */
export type QueryRootTestByPkArgs = {
  id: Scalars['Int']
}

/** query root */
export type QueryRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<UserOrderBy>>
  where?: Maybe<UserBoolExp>
}

/** query root */
export type QueryRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<UserOrderBy>>
  where?: Maybe<UserBoolExp>
}

/** query root */
export type QueryRootUserByPkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "question" */
export type Question = {
  __typename?: 'question'
  content?: Maybe<Scalars['String']>
  id: Scalars['bigint']
  /** An array relationship */
  question_tags: Array<QuestionTag>
  /** An aggregated array relationship */
  question_tags_aggregate: QuestionTagAggregate
  title?: Maybe<Scalars['String']>
}

/** columns and relationships of "question" */
export type QuestionQuestionTagsArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** columns and relationships of "question" */
export type QuestionQuestionTagsAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** aggregated selection of "question" */
export type QuestionAggregate = {
  __typename?: 'question_aggregate'
  aggregate?: Maybe<QuestionAggregateFields>
  nodes: Array<Question>
}

/** aggregate fields of "question" */
export type QuestionAggregateFields = {
  __typename?: 'question_aggregate_fields'
  avg?: Maybe<QuestionAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<QuestionMaxFields>
  min?: Maybe<QuestionMinFields>
  stddev?: Maybe<QuestionStddevFields>
  stddev_pop?: Maybe<QuestionStddevPopFields>
  stddev_samp?: Maybe<QuestionStddevSampFields>
  sum?: Maybe<QuestionSumFields>
  var_pop?: Maybe<QuestionVarPopFields>
  var_samp?: Maybe<QuestionVarSampFields>
  variance?: Maybe<QuestionVarianceFields>
}

/** aggregate fields of "question" */
export type QuestionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<QuestionSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "question" */
export type QuestionAggregateOrderBy = {
  avg?: Maybe<QuestionAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<QuestionMaxOrderBy>
  min?: Maybe<QuestionMinOrderBy>
  stddev?: Maybe<QuestionStddevOrderBy>
  stddev_pop?: Maybe<QuestionStddevPopOrderBy>
  stddev_samp?: Maybe<QuestionStddevSampOrderBy>
  sum?: Maybe<QuestionSumOrderBy>
  var_pop?: Maybe<QuestionVarPopOrderBy>
  var_samp?: Maybe<QuestionVarSampOrderBy>
  variance?: Maybe<QuestionVarianceOrderBy>
}

/** input type for inserting array relation for remote table "question" */
export type QuestionArrRelInsertInput = {
  data: Array<QuestionInsertInput>
  on_conflict?: Maybe<QuestionOnConflict>
}

/** aggregate avg on columns */
export type QuestionAvgFields = {
  __typename?: 'question_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "question" */
export type QuestionAvgOrderBy = {
  id?: Maybe<OrderBy>
}

/** Boolean expression to filter rows from the table "question". All fields are combined with a logical 'AND'. */
export type QuestionBoolExp = {
  _and?: Maybe<Array<Maybe<QuestionBoolExp>>>
  _not?: Maybe<QuestionBoolExp>
  _or?: Maybe<Array<Maybe<QuestionBoolExp>>>
  content?: Maybe<StringComparisonExp>
  id?: Maybe<BigintComparisonExp>
  question_tags?: Maybe<QuestionTagBoolExp>
  title?: Maybe<StringComparisonExp>
}

/** unique or primary key constraints on table "question" */
export enum QuestionConstraint {
  /** unique or primary key constraint */
  QuestionPkey = 'question_pkey',
}

/** input type for incrementing integer column in table "question" */
export type QuestionIncInput = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "question" */
export type QuestionInsertInput = {
  content?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  question_tags?: Maybe<QuestionTagArrRelInsertInput>
  title?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type QuestionMaxFields = {
  __typename?: 'question_max_fields'
  content?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "question" */
export type QuestionMaxOrderBy = {
  content?: Maybe<OrderBy>
  id?: Maybe<OrderBy>
  title?: Maybe<OrderBy>
}

/** aggregate min on columns */
export type QuestionMinFields = {
  __typename?: 'question_min_fields'
  content?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "question" */
export type QuestionMinOrderBy = {
  content?: Maybe<OrderBy>
  id?: Maybe<OrderBy>
  title?: Maybe<OrderBy>
}

/** response of any mutation on the table "question" */
export type QuestionMutationResponse = {
  __typename?: 'question_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Question>
}

/** input type for inserting object relation for remote table "question" */
export type QuestionObjRelInsertInput = {
  data: QuestionInsertInput
  on_conflict?: Maybe<QuestionOnConflict>
}

/** on conflict condition type for table "question" */
export type QuestionOnConflict = {
  constraint: QuestionConstraint
  update_columns: Array<QuestionUpdateColumn>
  where?: Maybe<QuestionBoolExp>
}

/** ordering options when selecting data from "question" */
export type QuestionOrderBy = {
  content?: Maybe<OrderBy>
  id?: Maybe<OrderBy>
  question_tags_aggregate?: Maybe<QuestionTagAggregateOrderBy>
  title?: Maybe<OrderBy>
}

/** primary key columns input for table: "question" */
export type QuestionPkColumnsInput = {
  id: Scalars['bigint']
}

/** select columns of table "question" */
export enum QuestionSelectColumn {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** input type for updating data in table "question" */
export type QuestionSetInput = {
  content?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type QuestionStddevFields = {
  __typename?: 'question_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "question" */
export type QuestionStddevOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type QuestionStddevPopFields = {
  __typename?: 'question_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "question" */
export type QuestionStddevPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type QuestionStddevSampFields = {
  __typename?: 'question_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "question" */
export type QuestionStddevSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate sum on columns */
export type QuestionSumFields = {
  __typename?: 'question_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "question" */
export type QuestionSumOrderBy = {
  id?: Maybe<OrderBy>
}

/** columns and relationships of "question_tag" */
export type QuestionTag = {
  __typename?: 'question_tag'
  /** An object relationship */
  question: Question
  question_id: Scalars['Int']
  /** An object relationship */
  tag: Tag
  tag_id: Scalars['Int']
}

/** aggregated selection of "question_tag" */
export type QuestionTagAggregate = {
  __typename?: 'question_tag_aggregate'
  aggregate?: Maybe<QuestionTagAggregateFields>
  nodes: Array<QuestionTag>
}

/** aggregate fields of "question_tag" */
export type QuestionTagAggregateFields = {
  __typename?: 'question_tag_aggregate_fields'
  avg?: Maybe<QuestionTagAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<QuestionTagMaxFields>
  min?: Maybe<QuestionTagMinFields>
  stddev?: Maybe<QuestionTagStddevFields>
  stddev_pop?: Maybe<QuestionTagStddevPopFields>
  stddev_samp?: Maybe<QuestionTagStddevSampFields>
  sum?: Maybe<QuestionTagSumFields>
  var_pop?: Maybe<QuestionTagVarPopFields>
  var_samp?: Maybe<QuestionTagVarSampFields>
  variance?: Maybe<QuestionTagVarianceFields>
}

/** aggregate fields of "question_tag" */
export type QuestionTagAggregateFieldsCountArgs = {
  columns?: Maybe<Array<QuestionTagSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "question_tag" */
export type QuestionTagAggregateOrderBy = {
  avg?: Maybe<QuestionTagAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<QuestionTagMaxOrderBy>
  min?: Maybe<QuestionTagMinOrderBy>
  stddev?: Maybe<QuestionTagStddevOrderBy>
  stddev_pop?: Maybe<QuestionTagStddevPopOrderBy>
  stddev_samp?: Maybe<QuestionTagStddevSampOrderBy>
  sum?: Maybe<QuestionTagSumOrderBy>
  var_pop?: Maybe<QuestionTagVarPopOrderBy>
  var_samp?: Maybe<QuestionTagVarSampOrderBy>
  variance?: Maybe<QuestionTagVarianceOrderBy>
}

/** input type for inserting array relation for remote table "question_tag" */
export type QuestionTagArrRelInsertInput = {
  data: Array<QuestionTagInsertInput>
  on_conflict?: Maybe<QuestionTagOnConflict>
}

/** aggregate avg on columns */
export type QuestionTagAvgFields = {
  __typename?: 'question_tag_avg_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "question_tag" */
export type QuestionTagAvgOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** Boolean expression to filter rows from the table "question_tag". All fields are combined with a logical 'AND'. */
export type QuestionTagBoolExp = {
  _and?: Maybe<Array<Maybe<QuestionTagBoolExp>>>
  _not?: Maybe<QuestionTagBoolExp>
  _or?: Maybe<Array<Maybe<QuestionTagBoolExp>>>
  question?: Maybe<QuestionBoolExp>
  question_id?: Maybe<IntComparisonExp>
  tag?: Maybe<TagBoolExp>
  tag_id?: Maybe<IntComparisonExp>
}

/** unique or primary key constraints on table "question_tag" */
export enum QuestionTagConstraint {
  /** unique or primary key constraint */
  QuestionTagPkey = 'question_tag_pkey',
}

/** input type for incrementing integer column in table "question_tag" */
export type QuestionTagIncInput = {
  question_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "question_tag" */
export type QuestionTagInsertInput = {
  question?: Maybe<QuestionObjRelInsertInput>
  question_id?: Maybe<Scalars['Int']>
  tag?: Maybe<TagObjRelInsertInput>
  tag_id?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type QuestionTagMaxFields = {
  __typename?: 'question_tag_max_fields'
  question_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "question_tag" */
export type QuestionTagMaxOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate min on columns */
export type QuestionTagMinFields = {
  __typename?: 'question_tag_min_fields'
  question_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "question_tag" */
export type QuestionTagMinOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** response of any mutation on the table "question_tag" */
export type QuestionTagMutationResponse = {
  __typename?: 'question_tag_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<QuestionTag>
}

/** input type for inserting object relation for remote table "question_tag" */
export type QuestionTagObjRelInsertInput = {
  data: QuestionTagInsertInput
  on_conflict?: Maybe<QuestionTagOnConflict>
}

/** on conflict condition type for table "question_tag" */
export type QuestionTagOnConflict = {
  constraint: QuestionTagConstraint
  update_columns: Array<QuestionTagUpdateColumn>
  where?: Maybe<QuestionTagBoolExp>
}

/** ordering options when selecting data from "question_tag" */
export type QuestionTagOrderBy = {
  question?: Maybe<QuestionOrderBy>
  question_id?: Maybe<OrderBy>
  tag?: Maybe<TagOrderBy>
  tag_id?: Maybe<OrderBy>
}

/** primary key columns input for table: "question_tag" */
export type QuestionTagPkColumnsInput = {
  question_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** select columns of table "question_tag" */
export enum QuestionTagSelectColumn {
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  TagId = 'tag_id',
}

/** input type for updating data in table "question_tag" */
export type QuestionTagSetInput = {
  question_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type QuestionTagStddevFields = {
  __typename?: 'question_tag_stddev_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "question_tag" */
export type QuestionTagStddevOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type QuestionTagStddevPopFields = {
  __typename?: 'question_tag_stddev_pop_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "question_tag" */
export type QuestionTagStddevPopOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type QuestionTagStddevSampFields = {
  __typename?: 'question_tag_stddev_samp_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "question_tag" */
export type QuestionTagStddevSampOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate sum on columns */
export type QuestionTagSumFields = {
  __typename?: 'question_tag_sum_fields'
  question_id?: Maybe<Scalars['Int']>
  tag_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "question_tag" */
export type QuestionTagSumOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** update columns of table "question_tag" */
export enum QuestionTagUpdateColumn {
  /** column name */
  QuestionId = 'question_id',
  /** column name */
  TagId = 'tag_id',
}

/** aggregate var_pop on columns */
export type QuestionTagVarPopFields = {
  __typename?: 'question_tag_var_pop_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "question_tag" */
export type QuestionTagVarPopOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate var_samp on columns */
export type QuestionTagVarSampFields = {
  __typename?: 'question_tag_var_samp_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "question_tag" */
export type QuestionTagVarSampOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** aggregate variance on columns */
export type QuestionTagVarianceFields = {
  __typename?: 'question_tag_variance_fields'
  question_id?: Maybe<Scalars['Float']>
  tag_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "question_tag" */
export type QuestionTagVarianceOrderBy = {
  question_id?: Maybe<OrderBy>
  tag_id?: Maybe<OrderBy>
}

/** update columns of table "question" */
export enum QuestionUpdateColumn {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
}

/** aggregate var_pop on columns */
export type QuestionVarPopFields = {
  __typename?: 'question_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "question" */
export type QuestionVarPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate var_samp on columns */
export type QuestionVarSampFields = {
  __typename?: 'question_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "question" */
export type QuestionVarSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate variance on columns */
export type QuestionVarianceFields = {
  __typename?: 'question_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "question" */
export type QuestionVarianceOrderBy = {
  id?: Maybe<OrderBy>
}

/** subscription root */
export type SubscriptionRoot = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "question" */
  question: Array<Question>
  /** fetch aggregated fields from the table: "question" */
  question_aggregate: QuestionAggregate
  /** fetch data from the table: "question" using primary key columns */
  question_by_pk?: Maybe<Question>
  /** fetch data from the table: "question_tag" */
  question_tag: Array<QuestionTag>
  /** fetch aggregated fields from the table: "question_tag" */
  question_tag_aggregate: QuestionTagAggregate
  /** fetch data from the table: "question_tag" using primary key columns */
  question_tag_by_pk?: Maybe<QuestionTag>
  /** fetch data from the table: "tag" */
  tag: Array<Tag>
  /** fetch aggregated fields from the table: "tag" */
  tag_aggregate: TagAggregate
  /** fetch data from the table: "tag" using primary key columns */
  tag_by_pk?: Maybe<Tag>
  /** fetch data from the table: "test" */
  test: Array<Test>
  /** fetch aggregated fields from the table: "test" */
  test_aggregate: TestAggregate
  /** fetch data from the table: "test" using primary key columns */
  test_by_pk?: Maybe<Test>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
}

/** subscription root */
export type SubscriptionRootQuestionArgs = {
  distinct_on?: Maybe<Array<QuestionSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionOrderBy>>
  where?: Maybe<QuestionBoolExp>
}

/** subscription root */
export type SubscriptionRootQuestionAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionOrderBy>>
  where?: Maybe<QuestionBoolExp>
}

/** subscription root */
export type SubscriptionRootQuestionByPkArgs = {
  id: Scalars['bigint']
}

/** subscription root */
export type SubscriptionRootQuestionTagArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** subscription root */
export type SubscriptionRootQuestionTagAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** subscription root */
export type SubscriptionRootQuestionTagByPkArgs = {
  question_id: Scalars['Int']
  tag_id: Scalars['Int']
}

/** subscription root */
export type SubscriptionRootTagArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TagOrderBy>>
  where?: Maybe<TagBoolExp>
}

/** subscription root */
export type SubscriptionRootTagAggregateArgs = {
  distinct_on?: Maybe<Array<TagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TagOrderBy>>
  where?: Maybe<TagBoolExp>
}

/** subscription root */
export type SubscriptionRootTagByPkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type SubscriptionRootTestArgs = {
  distinct_on?: Maybe<Array<TestSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TestOrderBy>>
  where?: Maybe<TestBoolExp>
}

/** subscription root */
export type SubscriptionRootTestAggregateArgs = {
  distinct_on?: Maybe<Array<TestSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<TestOrderBy>>
  where?: Maybe<TestBoolExp>
}

/** subscription root */
export type SubscriptionRootTestByPkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type SubscriptionRootUserArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<UserOrderBy>>
  where?: Maybe<UserBoolExp>
}

/** subscription root */
export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: Maybe<Array<UserSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<UserOrderBy>>
  where?: Maybe<UserBoolExp>
}

/** subscription root */
export type SubscriptionRootUserByPkArgs = {
  id: Scalars['Int']
}

/** columns and relationships of "tag" */
export type Tag = {
  __typename?: 'tag'
  id: Scalars['Int']
  /** An array relationship */
  question_tags: Array<QuestionTag>
  /** An aggregated array relationship */
  question_tags_aggregate: QuestionTagAggregate
  tag_value?: Maybe<Scalars['String']>
}

/** columns and relationships of "tag" */
export type TagQuestionTagsArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** columns and relationships of "tag" */
export type TagQuestionTagsAggregateArgs = {
  distinct_on?: Maybe<Array<QuestionTagSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<QuestionTagOrderBy>>
  where?: Maybe<QuestionTagBoolExp>
}

/** aggregated selection of "tag" */
export type TagAggregate = {
  __typename?: 'tag_aggregate'
  aggregate?: Maybe<TagAggregateFields>
  nodes: Array<Tag>
}

/** aggregate fields of "tag" */
export type TagAggregateFields = {
  __typename?: 'tag_aggregate_fields'
  avg?: Maybe<TagAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<TagMaxFields>
  min?: Maybe<TagMinFields>
  stddev?: Maybe<TagStddevFields>
  stddev_pop?: Maybe<TagStddevPopFields>
  stddev_samp?: Maybe<TagStddevSampFields>
  sum?: Maybe<TagSumFields>
  var_pop?: Maybe<TagVarPopFields>
  var_samp?: Maybe<TagVarSampFields>
  variance?: Maybe<TagVarianceFields>
}

/** aggregate fields of "tag" */
export type TagAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TagSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "tag" */
export type TagAggregateOrderBy = {
  avg?: Maybe<TagAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<TagMaxOrderBy>
  min?: Maybe<TagMinOrderBy>
  stddev?: Maybe<TagStddevOrderBy>
  stddev_pop?: Maybe<TagStddevPopOrderBy>
  stddev_samp?: Maybe<TagStddevSampOrderBy>
  sum?: Maybe<TagSumOrderBy>
  var_pop?: Maybe<TagVarPopOrderBy>
  var_samp?: Maybe<TagVarSampOrderBy>
  variance?: Maybe<TagVarianceOrderBy>
}

/** input type for inserting array relation for remote table "tag" */
export type TagArrRelInsertInput = {
  data: Array<TagInsertInput>
  on_conflict?: Maybe<TagOnConflict>
}

/** aggregate avg on columns */
export type TagAvgFields = {
  __typename?: 'tag_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "tag" */
export type TagAvgOrderBy = {
  id?: Maybe<OrderBy>
}

/** Boolean expression to filter rows from the table "tag". All fields are combined with a logical 'AND'. */
export type TagBoolExp = {
  _and?: Maybe<Array<Maybe<TagBoolExp>>>
  _not?: Maybe<TagBoolExp>
  _or?: Maybe<Array<Maybe<TagBoolExp>>>
  id?: Maybe<IntComparisonExp>
  question_tags?: Maybe<QuestionTagBoolExp>
  tag_value?: Maybe<StringComparisonExp>
}

/** unique or primary key constraints on table "tag" */
export enum TagConstraint {
  /** unique or primary key constraint */
  TagPkey = 'tag_pkey',
  /** unique or primary key constraint */
  TagTagValueKey = 'tag_tag_value_key',
}

/** input type for incrementing integer column in table "tag" */
export type TagIncInput = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "tag" */
export type TagInsertInput = {
  id?: Maybe<Scalars['Int']>
  question_tags?: Maybe<QuestionTagArrRelInsertInput>
  tag_value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type TagMaxFields = {
  __typename?: 'tag_max_fields'
  id?: Maybe<Scalars['Int']>
  tag_value?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "tag" */
export type TagMaxOrderBy = {
  id?: Maybe<OrderBy>
  tag_value?: Maybe<OrderBy>
}

/** aggregate min on columns */
export type TagMinFields = {
  __typename?: 'tag_min_fields'
  id?: Maybe<Scalars['Int']>
  tag_value?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "tag" */
export type TagMinOrderBy = {
  id?: Maybe<OrderBy>
  tag_value?: Maybe<OrderBy>
}

/** response of any mutation on the table "tag" */
export type TagMutationResponse = {
  __typename?: 'tag_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Tag>
}

/** input type for inserting object relation for remote table "tag" */
export type TagObjRelInsertInput = {
  data: TagInsertInput
  on_conflict?: Maybe<TagOnConflict>
}

/** on conflict condition type for table "tag" */
export type TagOnConflict = {
  constraint: TagConstraint
  update_columns: Array<TagUpdateColumn>
  where?: Maybe<TagBoolExp>
}

/** ordering options when selecting data from "tag" */
export type TagOrderBy = {
  id?: Maybe<OrderBy>
  question_tags_aggregate?: Maybe<QuestionTagAggregateOrderBy>
  tag_value?: Maybe<OrderBy>
}

/** primary key columns input for table: "tag" */
export type TagPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "tag" */
export enum TagSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  TagValue = 'tag_value',
}

/** input type for updating data in table "tag" */
export type TagSetInput = {
  id?: Maybe<Scalars['Int']>
  tag_value?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type TagStddevFields = {
  __typename?: 'tag_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "tag" */
export type TagStddevOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type TagStddevPopFields = {
  __typename?: 'tag_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "tag" */
export type TagStddevPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type TagStddevSampFields = {
  __typename?: 'tag_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "tag" */
export type TagStddevSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate sum on columns */
export type TagSumFields = {
  __typename?: 'tag_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "tag" */
export type TagSumOrderBy = {
  id?: Maybe<OrderBy>
}

/** update columns of table "tag" */
export enum TagUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  TagValue = 'tag_value',
}

/** aggregate var_pop on columns */
export type TagVarPopFields = {
  __typename?: 'tag_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "tag" */
export type TagVarPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate var_samp on columns */
export type TagVarSampFields = {
  __typename?: 'tag_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "tag" */
export type TagVarSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate variance on columns */
export type TagVarianceFields = {
  __typename?: 'tag_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "tag" */
export type TagVarianceOrderBy = {
  id?: Maybe<OrderBy>
}

/** columns and relationships of "test" */
export type Test = {
  __typename?: 'test'
  id: Scalars['Int']
  name: Scalars['String']
}

/** aggregated selection of "test" */
export type TestAggregate = {
  __typename?: 'test_aggregate'
  aggregate?: Maybe<TestAggregateFields>
  nodes: Array<Test>
}

/** aggregate fields of "test" */
export type TestAggregateFields = {
  __typename?: 'test_aggregate_fields'
  avg?: Maybe<TestAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<TestMaxFields>
  min?: Maybe<TestMinFields>
  stddev?: Maybe<TestStddevFields>
  stddev_pop?: Maybe<TestStddevPopFields>
  stddev_samp?: Maybe<TestStddevSampFields>
  sum?: Maybe<TestSumFields>
  var_pop?: Maybe<TestVarPopFields>
  var_samp?: Maybe<TestVarSampFields>
  variance?: Maybe<TestVarianceFields>
}

/** aggregate fields of "test" */
export type TestAggregateFieldsCountArgs = {
  columns?: Maybe<Array<TestSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "test" */
export type TestAggregateOrderBy = {
  avg?: Maybe<TestAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<TestMaxOrderBy>
  min?: Maybe<TestMinOrderBy>
  stddev?: Maybe<TestStddevOrderBy>
  stddev_pop?: Maybe<TestStddevPopOrderBy>
  stddev_samp?: Maybe<TestStddevSampOrderBy>
  sum?: Maybe<TestSumOrderBy>
  var_pop?: Maybe<TestVarPopOrderBy>
  var_samp?: Maybe<TestVarSampOrderBy>
  variance?: Maybe<TestVarianceOrderBy>
}

/** input type for inserting array relation for remote table "test" */
export type TestArrRelInsertInput = {
  data: Array<TestInsertInput>
  on_conflict?: Maybe<TestOnConflict>
}

/** aggregate avg on columns */
export type TestAvgFields = {
  __typename?: 'test_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "test" */
export type TestAvgOrderBy = {
  id?: Maybe<OrderBy>
}

/** Boolean expression to filter rows from the table "test". All fields are combined with a logical 'AND'. */
export type TestBoolExp = {
  _and?: Maybe<Array<Maybe<TestBoolExp>>>
  _not?: Maybe<TestBoolExp>
  _or?: Maybe<Array<Maybe<TestBoolExp>>>
  id?: Maybe<IntComparisonExp>
  name?: Maybe<StringComparisonExp>
}

/** unique or primary key constraints on table "test" */
export enum TestConstraint {
  /** unique or primary key constraint */
  TestPkey = 'test_pkey',
}

/** input type for incrementing integer column in table "test" */
export type TestIncInput = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "test" */
export type TestInsertInput = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type TestMaxFields = {
  __typename?: 'test_max_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "test" */
export type TestMaxOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** aggregate min on columns */
export type TestMinFields = {
  __typename?: 'test_min_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "test" */
export type TestMinOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** response of any mutation on the table "test" */
export type TestMutationResponse = {
  __typename?: 'test_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Test>
}

/** input type for inserting object relation for remote table "test" */
export type TestObjRelInsertInput = {
  data: TestInsertInput
  on_conflict?: Maybe<TestOnConflict>
}

/** on conflict condition type for table "test" */
export type TestOnConflict = {
  constraint: TestConstraint
  update_columns: Array<TestUpdateColumn>
  where?: Maybe<TestBoolExp>
}

/** ordering options when selecting data from "test" */
export type TestOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** primary key columns input for table: "test" */
export type TestPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "test" */
export enum TestSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "test" */
export type TestSetInput = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type TestStddevFields = {
  __typename?: 'test_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "test" */
export type TestStddevOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type TestStddevPopFields = {
  __typename?: 'test_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "test" */
export type TestStddevPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type TestStddevSampFields = {
  __typename?: 'test_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "test" */
export type TestStddevSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate sum on columns */
export type TestSumFields = {
  __typename?: 'test_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "test" */
export type TestSumOrderBy = {
  id?: Maybe<OrderBy>
}

/** update columns of table "test" */
export enum TestUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type TestVarPopFields = {
  __typename?: 'test_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "test" */
export type TestVarPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate var_samp on columns */
export type TestVarSampFields = {
  __typename?: 'test_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "test" */
export type TestVarSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate variance on columns */
export type TestVarianceFields = {
  __typename?: 'test_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "test" */
export type TestVarianceOrderBy = {
  id?: Maybe<OrderBy>
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user'
  id: Scalars['Int']
  name?: Maybe<Scalars['String']>
}

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'user_aggregate'
  aggregate?: Maybe<UserAggregateFields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields'
  avg?: Maybe<UserAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<UserMaxFields>
  min?: Maybe<UserMinFields>
  stddev?: Maybe<UserStddevFields>
  stddev_pop?: Maybe<UserStddevPopFields>
  stddev_samp?: Maybe<UserStddevSampFields>
  sum?: Maybe<UserSumFields>
  var_pop?: Maybe<UserVarPopFields>
  var_samp?: Maybe<UserVarSampFields>
  variance?: Maybe<UserVarianceFields>
}

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user" */
export type UserAggregateOrderBy = {
  avg?: Maybe<UserAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<UserMaxOrderBy>
  min?: Maybe<UserMinOrderBy>
  stddev?: Maybe<UserStddevOrderBy>
  stddev_pop?: Maybe<UserStddevPopOrderBy>
  stddev_samp?: Maybe<UserStddevSampOrderBy>
  sum?: Maybe<UserSumOrderBy>
  var_pop?: Maybe<UserVarPopOrderBy>
  var_samp?: Maybe<UserVarSampOrderBy>
  variance?: Maybe<UserVarianceOrderBy>
}

/** input type for inserting array relation for remote table "user" */
export type UserArrRelInsertInput = {
  data: Array<UserInsertInput>
  on_conflict?: Maybe<UserOnConflict>
}

/** aggregate avg on columns */
export type UserAvgFields = {
  __typename?: 'user_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user" */
export type UserAvgOrderBy = {
  id?: Maybe<OrderBy>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: Maybe<Array<Maybe<UserBoolExp>>>
  _not?: Maybe<UserBoolExp>
  _or?: Maybe<Array<Maybe<UserBoolExp>>>
  id?: Maybe<IntComparisonExp>
  name?: Maybe<StringComparisonExp>
}

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
}

/** input type for incrementing integer column in table "user" */
export type UserIncInput = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user" */
export type UserMaxOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user" */
export type UserMinOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput
  on_conflict?: Maybe<UserOnConflict>
}

/** on conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint
  update_columns: Array<UserUpdateColumn>
  where?: Maybe<UserBoolExp>
}

/** ordering options when selecting data from "user" */
export type UserOrderBy = {
  id?: Maybe<OrderBy>
  name?: Maybe<OrderBy>
}

/** primary key columns input for table: "user" */
export type UserPkColumnsInput = {
  id: Scalars['Int']
}

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type UserStddevFields = {
  __typename?: 'user_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user" */
export type UserStddevOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_pop on columns */
export type UserStddevPopFields = {
  __typename?: 'user_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user" */
export type UserStddevPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate stddev_samp on columns */
export type UserStddevSampFields = {
  __typename?: 'user_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user" */
export type UserStddevSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: 'user_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user" */
export type UserSumOrderBy = {
  id?: Maybe<OrderBy>
}

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type UserVarPopFields = {
  __typename?: 'user_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user" */
export type UserVarPopOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate var_samp on columns */
export type UserVarSampFields = {
  __typename?: 'user_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user" */
export type UserVarSampOrderBy = {
  id?: Maybe<OrderBy>
}

/** aggregate variance on columns */
export type UserVarianceFields = {
  __typename?: 'user_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user" */
export type UserVarianceOrderBy = {
  id?: Maybe<OrderBy>
}

export type GetUserListQueryVariables = Exact<{ [key: string]: never }>

export type GetUserListQuery = { __typename?: 'query_root' } & {
  user: Array<{ __typename?: 'user' } & Pick<User, 'id' | 'name'>>
}

export type GetQuestionListQueryVariables = Exact<{ [key: string]: never }>

export type GetQuestionListQuery = { __typename?: 'query_root' } & {
  question: Array<{ __typename?: 'question' } & Pick<Question, 'id' | 'title' | 'content'>>
}

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']
}>

export type CreateUserMutation = { __typename?: 'mutation_root' } & {
  insert_user?: Maybe<
    { __typename?: 'user_mutation_response' } & Pick<UserMutationResponse, 'affected_rows'>
  >
}

export type CreateQuestionMutationVariables = Exact<{
  title: Scalars['String']
  content: Scalars['String']
}>

export type CreateQuestionMutation = { __typename?: 'mutation_root' } & {
  insert_question?: Maybe<
    { __typename?: 'question_mutation_response' } & Pick<QuestionMutationResponse, 'affected_rows'>
  >
}

export const GetUserListDocument = gql`
  query getUserList {
    user {
      id
      name
    }
  }
`

/**
 * __useGetUserListQuery__
 *
 * To run a query within a React component, call `useGetUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUserListQuery, GetUserListQueryVariables>,
) {
  return Apollo.useQuery<GetUserListQuery, GetUserListQueryVariables>(
    GetUserListDocument,
    baseOptions,
  )
}

export function useGetUserListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserListQuery, GetUserListQueryVariables>,
) {
  return Apollo.useLazyQuery<GetUserListQuery, GetUserListQueryVariables>(
    GetUserListDocument,
    baseOptions,
  )
}

export type GetUserListQueryHookResult = ReturnType<typeof useGetUserListQuery>
export type GetUserListLazyQueryHookResult = ReturnType<typeof useGetUserListLazyQuery>
export type GetUserListQueryResult = Apollo.QueryResult<GetUserListQuery, GetUserListQueryVariables>
export const GetQuestionListDocument = gql`
  query getQuestionList {
    question {
      id
      title
      content
    }
  }
`

/**
 * __useGetQuestionListQuery__
 *
 * To run a query within a React component, call `useGetQuestionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetQuestionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetQuestionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetQuestionListQuery(
  baseOptions?: Apollo.QueryHookOptions<GetQuestionListQuery, GetQuestionListQueryVariables>,
) {
  return Apollo.useQuery<GetQuestionListQuery, GetQuestionListQueryVariables>(
    GetQuestionListDocument,
    baseOptions,
  )
}

export function useGetQuestionListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetQuestionListQuery, GetQuestionListQueryVariables>,
) {
  return Apollo.useLazyQuery<GetQuestionListQuery, GetQuestionListQueryVariables>(
    GetQuestionListDocument,
    baseOptions,
  )
}

export type GetQuestionListQueryHookResult = ReturnType<typeof useGetQuestionListQuery>
export type GetQuestionListLazyQueryHookResult = ReturnType<typeof useGetQuestionListLazyQuery>
export type GetQuestionListQueryResult = Apollo.QueryResult<
  GetQuestionListQuery,
  GetQuestionListQueryVariables
>
export const CreateUserDocument = gql`
  mutation createUser($name: String!) {
    insert_user(objects: { name: $name }) {
      affected_rows
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    baseOptions,
  )
}

export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const CreateQuestionDocument = gql`
  mutation createQuestion($title: String!, $content: String!) {
    insert_question(objects: { title: $title, content: $content }) {
      affected_rows
    }
  }
`
export type CreateQuestionMutationFn = Apollo.MutationFunction<
  CreateQuestionMutation,
  CreateQuestionMutationVariables
>

/**
 * __useCreateQuestionMutation__
 *
 * To run a mutation, you first call `useCreateQuestionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuestionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuestionMutation, { data, loading, error }] = useCreateQuestionMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreateQuestionMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateQuestionMutation, CreateQuestionMutationVariables>,
) {
  return Apollo.useMutation<CreateQuestionMutation, CreateQuestionMutationVariables>(
    CreateQuestionDocument,
    baseOptions,
  )
}

export type CreateQuestionMutationHookResult = ReturnType<typeof useCreateQuestionMutation>
export type CreateQuestionMutationResult = Apollo.MutationResult<CreateQuestionMutation>
export type CreateQuestionMutationOptions = Apollo.BaseMutationOptions<
  CreateQuestionMutation,
  CreateQuestionMutationVariables
>
