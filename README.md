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
- グループ新規作成・編集機能
- チャット送信機能(非同期通信)
- ユーザーのインクリメンタルサーチ機能
- チャット自動更新機能

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