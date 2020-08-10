# Overview

## 🌐 App URL
http://18.180.203.11/

## Test Account
- Eメール：test@test
- パスワード：test@test

## Environment
- Ruby on Rails
- Haml/Sass
- Javascript/jQuery
- データベースはMySQLを使用
- デプロイはAWSで実施

## Function
- ログイン機能
<img src="https://user-images.githubusercontent.com/65595354/82827293-b20d3500-9ee9-11ea-968a-9c13765a22a5.png">

- グループ新規作成・編集機能
<!-- <img src=""> -->
・チャットグループ編集画面でグループ名、チャットメンバーを選択して追加できる。

- チャット送信機能(非同期通信)
<img src="https://user-images.githubusercontent.com/65595354/83343974-29a0f100-a33c-11ea-889a-4ba5a70d17e9.gif">

- ユーザーのインクリメンタルサーチ機能
<img src="https://user-images.githubusercontent.com/65595354/83431958-1e041600-a473-11ea-9ad0-613b4782dbc2.png">

- チャット自動更新機能
<img src="https://user-images.githubusercontent.com/65595354/83490635-5b0bef00-a4eb-11ea-951a-146ee15ac7ae.gif">


# ChatSpace DB設計

## postsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :posts
- has_many :users_groups
- has_many :groups,  through:  :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
- has_many :posts
- has_many :users_groups
- has_many :users,  through:  :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group