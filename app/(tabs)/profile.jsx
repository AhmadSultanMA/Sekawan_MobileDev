import { Text, View, Image, Linking, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  const handleGitHubClick = () => {
    Linking.openURL("https://github.com/AhmadSultanMA");
  };

  return (
    <ScrollView className="flex-1 bg-gray-50 p-6">
      <View className="items-center my-2">
        <Image
          source={{
            uri: "https://instagram.fcgk30-1.fna.fbcdn.net/v/t51.2885-19/470163490_1089732939554781_969105113952107571_n.jpg?stp=dst-jpg_s320x320_tt6&_nc_ht=instagram.fcgk30-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AE9kZhsXY5myhu9ZQKksGDEA9clPgl7YJL_LdmF6UBwGkpUKB1MplRU-2jJ6f9C-OY&_nc_ohc=vWY8qwDXaP0Q7kNvgH_LXZX&_nc_gid=06059ffd01f24c7f975677b5faec2645&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBKDGapCXT5I2OMORPcVjMVfR_xU5HecJO135i6Tc3R7w&oe=677A56F4&_nc_sid=8b3546",
          }}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
      </View>

      <View className="mb-2">
        <Text className="text-3xl font-bold text-gray-800 text-center">
          Irza
        </Text>
        <Text className="text-base text-gray-600 mt-2 text-justify">
          I am a third-year Information Technology student at Brawijaya
          University, with a strong foundation in decision-making,
          problem-solving, and programming. I am proficient in languages such as
          Flutter, Kotlin, React.js, Golang, Next.js, React.js, Python, and PHP.
          I am passionate about web and app development and aspire to become a
          Website Developer, App Developer, or Backend Developer.
        </Text>

        {/* Education Section */}
        <View className="my-4">
          <Text className="text-lg font-semibold text-gray-800 mb-2">
            EDUCATION
          </Text>
          <Text className="text-base text-gray-600">
            <Text className="font-bold">Brawijaya University</Text> (Aug 2022 –
            Present)
            {"\n"}Undergraduate Degree in Information Technology (Expected
            Graduation: Apr 2026)
            {"\n"}CGPA: 3.77/4.00
          </Text>
        </View>
      </View>

      <View className="text-center">
        <Text className="text-xl font-semibold text-gray-800">
          My Portfolio
        </Text>

        <View className="">
          <Text className="text-lg text-blue-500" onPress={handleGitHubClick}>
            GitHub
          </Text>
        </View>

        <View className="mb-8">
          <Text className="text-lg font-semibold text-gray-800">
            UrDentist Apps
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Developed a Flutter mobile app for detecting dental caries and
            offering treatment recommendations. Selected as Top 100 in Google
            Solution Challenge 2024. Front-End Developer. June 2024 - Aug 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            SIMABA 2024 Website
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Led the development of a website for PKKMB event, supporting over
            900 active users. Head of PIT Division. June 2024 - Aug 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            NgampusYuk App
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Developed a mobile app using Kotlin for campus resources. Completed
            90% of the development. March 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            BEM FILKOM 2023 Website
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Front-End Developer and team lead for BEM FILKOM 2023 Website. Built
            a responsive site using React.js. Feb 2023 - Oct 2023.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            Sportix Website
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Developed a website for sports facility management. Integrated
            payment gateway using Midtrans. Backend Developer with Laravel. Feb
            2023 - Mar 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            USMAN Apps
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Contributed to the development of two Flutter apps for the MTQMN
            Competition. Team secured national runner-up. Sept 2024 - Nov 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            BimbelZ LMS Website
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Developed an LMS website for a school’s final project. Backend
            Developer using Laravel. Oct 2021 - Jan 2022.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            Brawijaya Tournament 2023 Website
          </Text>
          <Text className="text-base text-gray-600 mb-2 text-justify">
            Built a dynamic, responsive platform for event information and
            registration using React.js. Oct 2024 - Nov 2024.
          </Text>

          <Text className="text-lg font-semibold text-gray-800">
            Desa Babadan Website
          </Text>
          <Text className="text-base text-gray-600">
            Developed a profile website for Desa Babadan, showcasing its culture
            and infrastructure. July 2024 - Aug 2024.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
