require 'spec_helper'


RSpec.describe  do
    it " Order_item.rb file has been created " do
      expect(File.exist?("app/models/order_item.rb")).to be true
    end
  end