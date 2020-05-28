require 'rails_helper'

RSpec.describe Message, type: :model do
    describe '#create' do

  # メッセージを保存できる場合
    it "メッセージがあれば保存できること" do
      message = build(:message, content: "test")
      message.valid?
      expect(message).to be_valid
    end

    it "画像があれば保存できること" do
      message = build(:message, image: "images.test_image.jpg")
      message.valid?
      expect(message).to be_valid
    end

    it "メッセージと画像があれば保存できること" do
      message = build(:message, content: "test", image: "images.test_image.jpg")
      message.valid?
      expect(message).to be_valid
    end

    # メッセージを保存できない場合
    it "メッセージも画像も無いと保存できないこと" do
      message = build(:message, content: "", image: "")
      message.valid?
      expect(message.errors[:content]).to include("を入力してください")
    end

    it "group_idが無いと保存できないこと" do
      message = build(:group, id: "")
      message.valid?
      expect(group.errors[:id]).to include("can't be blank")
    end

    it "user_idが無いと保存できないこと" do
      message = build(:user, id: "")
      message.valid?
      expect(user.errors[:id]).to include("can't be blank")
    end
    
  end
end
