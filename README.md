## Overview

## 🌐 App URL

## Test Account

## Environment

## Function

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