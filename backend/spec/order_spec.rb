require 'spec_helper'

RSpec.describe  do
    it " Order.rb file has been created " do
      expect(File.exist?("app/models/order.rb")).to be true
    end
  end
