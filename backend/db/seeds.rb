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
user1 = User.create(
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    role: "admin"

  )
  
  # create the second user
  user2 = User.create(
    name: "Jane Smith",
    email: "janesmith@example.com",
    password: "password456",
    role: "user"
  )

  user3 = User.create(
    name: "Bob Johnson",
    email: "bjohnson@example.com",
    password: "password789",
    role: "user"
  )

  user4 = User.create(
    name: "Alice Lee",
    email: "alee@example.com",
    password: "password123",
    role: "user"
  )

  user5 = User.create(
    name: "Charlie Brown",
    email: "cbrown@example.com",
    password: "password456",
    role: "user"
  )

  user6 = User.create(
    name: "Samantha Smith",
    email: "ssmith@example.com",
    password: "password789",
    role: "user"
  )

  user7 = User.create(
    name: "Peter Parker",
    email: "pparker@example.com",
    password: "password123",
    role: "user"
  )


  order1 = Order.create(user: user2, address: "1234 ngong road", billing_information: "Visa ending in 1234")
  order2 = Order.create(user: user2, address: "5678 tobor", billing_information: "Mastercard ending in 5678")
  order3 = Order.create(user: user3, address: "kimathi street", billing_information: "Mastercard ending in 6776")
  order4 = Order.create(user: user3, address: "4321 ngong road", billing_information: "Visa ending in 4321")
  order5 = Order.create(user: user4, address: "8765 tobor", billing_information: "Mastercard ending in 8765")
  order6 = Order.create(user: user4, address: "moi avenue", billing_information: "Visa ending in 4567")
  order7 = Order.create(user: user5, address: "juja town", billing_information: "Mastercard ending in 8899")
  order8 = Order.create(user: user6, address: "nairobi west", billing_information: "Visa ending in 3322")
  order9 = Order.create(user: user7, address: "karen", billing_information: "Mastercard ending in 6543")
  order10 = Order.create(user: user7, address: "lavington", billing_information: "Visa ending in 1111")

  # Categories
category1 = Category.create(name: "laptops", description: "Affordable Laptops")
category2 = Category.create(name: "headphones", description: "Great Sound Headphones")
category3 = Category.create(name: "TVs", description: "OLED, 4K and LED TVs")
category4 = Category.create(name: "cameras", description: "Quality Cameras")


# Products
product1 = Product.create(name: "Canon EOS R6", price: 140000, description: "The Canon EOS R6 is a full-frame mirrorless camera that boasts a 20.1MP CMOS sensor, 4K video recording, and advanced autofocus capabilities.", image: "https://53525363.000webhostapp.com/Images/10_ways_to_supercharge_your_Canon_DSLR_camera-removebg-preview.png", category: category4)

product2 = Product.create(name: "Audio-Technica ATH-M50x", price: 15000, description: "The Audio-Technica ATH-M50x is a professional studio monitor headphone that delivers exceptional audio performance and comfort. With its large aperture drivers, robust construction, and collapsible design, the ATH-M50x is ideal for professional audio engineers, musicians, and audiophiles.", image: "https://53525363.000webhostapp.com/Images/Skullcandy_Crusher_Wireless_Over-Ear_Headphones_-_Black-removebg-preview.png" , category: category2)

product3 = Product.create(name: "Dell Inspiron E1405", price: 65000, description: "The Dell Inspiron E1405 is a compact and affordable laptop that offers reliable performance for everyday computing tasks. With its Intel Core processor, ample storage, and vibrant display, the Inspiron E1405 is perfect for students, professionals, and casual users who need a reliable and portable computing solution. It features a sleek design, easy-to-use interface, and a wide range of connectivity options for enhanced productivity and convenience.", image: "https://53525363.000webhostapp.com/Images/Best_MacBook_alternatives_for_2022___Digital_Trends-removebg-preview.png" , category: category1)

product4 = Product.create(name: "Hisense U8H", price: 70000, description: "The Hisense U8H is a high-quality 4K Ultra HD Android TV that delivers stunning picture quality, immersive audio, and a wealth of smart features.",  image: "https://53525363.000webhostapp.com/Images/I_like_tv_too_-removebg-preview.png" , category: category1)

product5 = Product.create(name: "Canon EOS 5D", price: 80000, description: "The Canon EOS 5D is a legendary full-frame DSLR camera that offers professional-grade image quality, performance, and versatility.",  image: "https://53525363.000webhostapp.com/Images/Canon_EOS-1D_X_Mark_II_Full-Frame_DSLR_Camera_for_Professional_Image_Creators__Features_20_2MP__Improved_AF_and_4K_Video-removebg-preview.png" , category: category4)

product6 = Product.create(name: "Sennheiser HD 800", price: 10000, description: "The Sennheiser HD 800 is a premium open-back over-ear headphone that offers audiophile-grade sound quality, exceptional comfort, and top-notch craftsmanship.",  image: "https://53525363.000webhostapp.com/Images/Functional_Headphones_That_Are_Also_Pretty_Chic-removebg-preview.png" , category: category2)

product7 = Product.create(name: "HP Envy x360", price: 50000, description: "The HP Envy x360 is a premium 2-in-1 convertible laptop that offers versatility, performance, and style. With its powerful AMD Ryzen processor, up to 16GB of RAM, and fast SSD storage, the Envy x360 delivers smooth and responsive performance for multitasking, creative tasks, and entertainment.", image: "https://53525363.000webhostapp.com/Images/HP_Pavilion_15-cs3000_%E8%A3%BD%E5%93%81%E8%A9%B3%E7%B4%B0_-_%E3%83%8E%E3%83%BC%E3%83%88%E3%83%91%E3%82%BD%E3%82%B3%E3%83%B3___%E6%97%A5%E6%9C%ACHP-removebg-preview.png" , category: category1)

product8 = Product.create(name: "LG CX 65-inch 4K", price: 70000, description: "The LG CX 65-inch 4K TV is a cutting-edge OLED TV that offers stunning picture quality, advanced features, and smart functionality. With its 65-inch OLED panel, the CX delivers deep blacks, vibrant colors, and infinite contrast for a truly immersive viewing experience. It supports 4K resolution, HDR formats, and has a high refresh rate for smooth motion handling.",   image: "https://53525363.000webhostapp.com/Images/Vizio_M-Series_Quantum_4K_TV_review-removebg-preview.png" , category: category3)

product9 = Product.create(name: "Audio-Technica ATH Headphones", price: 12000,  description: "The Audio-Technica ATH headphones are high-quality headphones designed for audiophiles and music enthusiasts. ",  image: "https://53525363.000webhostapp.com/Images/Razer_Opus-removebg-preview.png" , category: category2)


# Order items
order_item1 = OrderItem.create(order: order1, product: product1)
order_item2 = OrderItem.create(order: order2, product: product2)
order_item3 = OrderItem.create(order: order3, product: product3)
order_item3 = OrderItem.create(order: order1, product: product4)
order_item3 = OrderItem.create(order: order2, product: product5)
order_item3 = OrderItem.create(order: order3, product: product6)





puts "Seeding completed successfully!"