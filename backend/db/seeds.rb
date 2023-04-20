# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'faker'
puts "Seeding records..."

# # create the first user
# User.create(
#     name: "John Doe",
#     email: "johndoe@example.com",
#     password: "password123"
#   )
  
#   # create the second user
#   User.create(
#     name: "Jane Smith",
#     email: "janesmith@example.com",
#     password: "password456"
#   )

# Create customers
user1 = User.create(name: "john_doe", password: "password123", role: "user")
user2 = User.create(name: "jane_smith", password: "password456", role: "user")

# Create admins
admin1 = User.create(name: "admin_user", password: "admin123", role: "admin")
admin2 = User.create(name: "admin", password: "admin", role: "admin")






  # Categories
category1 = Category.create(name: "laptops")
category2 = Category.create(name: "headphones")
category3 = Category.create(name: "TVs")
category4 = Category.create(name: "cameras")

# Products

product1 = Product.create(name: "Canon EOS R6", price: 140000, description: "The Canon EOS R6 is a full-frame mirrorless camera that boasts a 20.1MP CMOS sensor, 4K video recording, and advanced autofocus capabilities.",  category: category4)

product2 = Product.create(name: "Audio-Technica ATH-M50x", price: 15000, description: "The Audio-Technica ATH-M50x is a professional studio monitor headphone that delivers exceptional audio performance and comfort. With its large aperture drivers, robust construction, and collapsible design, the ATH-M50x is ideal for professional audio engineers, musicians, and audiophiles.",  category: category2)

product3 = Product.create(name: "Dell Inspiron E1405", price: 65000, description: "The Dell Inspiron E1405 is a compact and affordable laptop that offers reliable performance for everyday computing tasks. With its Intel Core processor, ample storage, and vibrant display, the Inspiron E1405 is perfect for students, professionals, and casual users who need a reliable and portable computing solution. It features a sleek design, easy-to-use interface, and a wide range of connectivity options for enhanced productivity and convenience.",  category: category1)

product4 = Product.create(name: "Hisense U8H", price: 70000, description: "The Hisense U8H is a high-quality 4K Ultra HD Android TV that delivers stunning picture quality, immersive audio, and a wealth of smart features.",  category: category1)

product5 = Product.create(name: "Canon EOS 5D", price: 80000, description: "The Canon EOS 5D is a legendary full-frame DSLR camera that offers professional-grade image quality, performance, and versatility.",  category: category4)

product6 = Product.create(name: "Sennheiser HD 800", price: 10000, description: "The Sennheiser HD 800 is a premium open-back over-ear headphone that offers audiophile-grade sound quality, exceptional comfort, and top-notch craftsmanship.", category: category2)

product7 = Product.create(name: "HP Envy x360", price: 50000, description: "The HP Envy x360 is a premium 2-in-1 convertible laptop that offers versatility, performance, and style. With its powerful AMD Ryzen processor, up to 16GB of RAM, and fast SSD storage, the Envy x360 delivers smooth and responsive performance for multitasking, creative tasks, and entertainment.",  category: category1)

product8 = Product.create(name: "LG CX 65-inch 4K", price: 70000, description: "The LG CX 65-inch 4K TV is a cutting-edge OLED TV that offers stunning picture quality, advanced features, and smart functionality. With its 65-inch OLED panel, the CX delivers deep blacks, vibrant colors, and infinite contrast for a truly immersive viewing experience. It supports 4K resolution, HDR formats, and has a high refresh rate for smooth motion handling.",  category: category3)

product9 = Product.create(name: "Audio-Technica ATH Headphones", price: 12000,  description: "The Audio-Technica ATH headphones are high-quality headphones designed for audiophiles and music enthusiasts. ",  category: category2)

puts "Seeding completed successfully!"