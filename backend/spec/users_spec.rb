require 'spec_helper'

RSpec.describe  do
    it " user.rb file has been created " do
      expect(File.exist?("app/models/user.rb")).to be true
    end
  end
