require 'spec_helper'

RSpec.describe  do
    it " order_items.rb controller has been created " do
      expect(File.exist?("app/controllers/order_items_controller.rb")).to be true
    end
  end

