require 'spec_helper'

RSpec.describe  do
    it " order.rb controller has been created " do
      expect(File.exist?("app/controllers/orders_controller.rb")).to be true
    end
  end

