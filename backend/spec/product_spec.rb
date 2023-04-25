require 'spec_helper'

RSpec.describe  do
    it " product.rb file has been created " do
      expect(File.exist?("app/models/product.rb")).to be true
    end
  end

