RSpec.describe  do
    it " product.rb" do
      expect(File.exist?("app/models/product.rb")).to be true
    end
  end

