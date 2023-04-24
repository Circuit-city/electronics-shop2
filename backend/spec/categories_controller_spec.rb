require 'spec_helper'

RSpec.describe  do
    it " categories.rb controller has been created " do
      expect(File.exist?("app/controllers/categories_controller.rb")).to be true
    end
  end

