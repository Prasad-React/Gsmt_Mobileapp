import { Text, TouchableOpacity, View } from "react-native";

export default function EmployeeHome() {
  return (
    <View className="flex-1 bg-gray-100 px-4 pt-12">

      {/* Header */}
      <Text className="text-2xl font-bold text-gray-800">
        Hi, Prasad 👋
      </Text>
      <Text className="text-gray-500 mt-1">
        Driver ID: GSMT1011
      </Text>

      {/* Check In Button */}
      <TouchableOpacity className="bg-green-500 mt-6 p-4 rounded-xl items-center shadow">
        <Text className="text-white text-lg font-semibold">
          ✔ Check In
        </Text>
      </TouchableOpacity>

      {/* Assigned Trip Card */}
      <View className="bg-white mt-6 p-4 rounded-2xl shadow">

        <Text className="text-gray-600 mb-2 font-semibold">
          🚚 Assigned Trip
        </Text>

        <Text className="text-lg font-bold text-gray-800">
          Tata Ace Mini Truck
        </Text>

        <Text className="text-gray-500 mt-1">
          Pickup: Visakhapatnam
        </Text>

        <Text className="text-gray-500">
          Drop: Srikakulam
        </Text>

        <Text className="text-green-600 font-bold mt-2">
          ₹360
        </Text>

        {/* Start Trip Button */}
        <TouchableOpacity className="bg-blue-600 mt-4 p-3 rounded-lg items-center">
          <Text className="text-white font-semibold">
            Start Trip
          </Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View className="flex-row justify-between mt-6">

        <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[30%] shadow">
          <Text className="text-xl">🚗</Text>
          <Text className="text-gray-600 mt-1 text-sm">My Trips</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[30%] shadow">
          <Text className="text-xl">📍</Text>
          <Text className="text-gray-600 mt-1 text-sm">Tracking</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 rounded-xl items-center w-[30%] shadow">
          <Text className="text-xl">👤</Text>
          <Text className="text-gray-600 mt-1 text-sm">Profile</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}