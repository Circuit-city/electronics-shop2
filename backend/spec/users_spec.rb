RSpec.describe  do
    it "user.rb" do
      expect(File.exist?("app/models/user.rb")).to be true
    end
  end