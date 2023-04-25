require 'spec_helper'

RSpec.describe  do
    it " category.rb file has been created " do
      expect(File.exist?("app/models/category.rb")).to be true
    end
  end