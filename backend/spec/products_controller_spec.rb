require 'spec_helper'

RSpec.describe  do
    it " products.rb controller has been created " do
      expect(File.exist?("app/controllers/products_controller.rb")).to be true
    end
  end
