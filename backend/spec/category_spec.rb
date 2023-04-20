RSpec.describe  do
    it " category.rb " do
      expect(File.exist?("app/models/category.rb")).to be true
    end
  end