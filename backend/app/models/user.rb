class User < ApplicationRecord
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    # validates :role, presence: true
    
    has_secure_password
    has_many :orders

    def admin?
        self.role
    end
end
