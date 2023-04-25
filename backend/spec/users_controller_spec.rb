require 'spec_helper'

RSpec.describe  do
    it " users.rb conroller has been created " do
      expect(File.exist?("app/controllers/users_controller.rb")).to be true
    end
  end
