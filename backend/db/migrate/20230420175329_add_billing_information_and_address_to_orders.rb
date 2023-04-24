class AddBillingInformationAndAddressToOrders < ActiveRecord::Migration[7.0]
  def change
    add_column :orders, :billing_information, :string
    add_column :orders, :address, :string
  end
end
