'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      profile_image: {
        type: DataTypes.STRING(10000),
        defaultValue: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AfwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADMQAAIBAwEGBAQEBwAAAAAAAAABAgMEESEFEjFBUXETIjJhI1KBoUKR0eEUJDNDYoKx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD7iAAAAAAGAMg4Tu6FP1VY9lqcntK35b7/ANQJgIa2lbvi5LvE7U7mjU0hUi304MDsBkAAAAAAAAAACsv7160qMvaUl/xAd7q/hRzGHnn9kVla5q1v6k3jotEcQaiMmAbxpzn6ISl2i2EaA2lCcPXGUe6wYA70LutR9Msx+WWqLO1vadx5fTP5WUhlNppp4wIr0gIFhe+L8Oq/PyfzfuTzKgAAABgQ9o3Pg09yL88/simO11V8avOfLPl7HE1iABtCO/OMPmaQRPsLKM4qrWWU/TFlmkksIJJJJcjJlpiUVNYkk10aKm/s1R+JTzucGuhbnOvBTozg+Di0B54AGmWU2nlPDLyyuP4iipP1LSSKIlbOreFcpP0z0Y1V2ADKhwvZ+Ha1Jc8Y/PQ7kPar/le8kBTmADTIbRluTjJcU8moygr0cJKcVKLymso2KexvVQW5U1p8sci0p16VRZhUi/qZV0OVzUVKhOb5LQVbmjSWZ1Ir2zqVF5eO4lhLdprVLr7iCMADSBng89DACPR0pb9OM+qTNiPYPNpS7Egy0EPaqzaN9JJkw43cPEtqkObWgFAADTIY3dTpTpyqzUILLZcWtlToYbSlPq+XYVVXTsLiosqGF/loYlY3CetJv7l+CVVDCxuJaeG+70MVrKvSWZQ06rVF+BR5nHuZ7lxd2EKuZU/LPpyZUyjKEnGSw1yZUagGUnJqK4vRBF5YrFpSXsSDWEVCEYrgkkbGWgMACivaPg3Eo48r1j2I5d39v/EUvL646x/QpXo8YwaxFzs6hGlRUtHKay2Symsrx0PJPWm/sW8ZxnFSi00+aM6rYAAAAAK/alCLp+MsKUePuTatSFKDlOSSRTXl1K5lomoJ6IuCMTNmUfEr77Xlhr9eRFjGU5xjFZcnhIvbWgrekoLV831ZdR2ABlQAACBf2XivxaSW/wDiXzfuTwB5tpptPRrkdKFepQeacsdVyZcXNpTuNZLEvmRWV7GtS1S349Y/oaRKpbUWPi02veLO62hbP8bXeLKVrHHTuYEKupbQt0tJuXaLI9XamdKVPHvIrTMU5PEVl+whW1WrOrLeqScmYhGU5KMIuTfBIlUNn1amHPyR9+P5Fnb21O3WKcdXxfNijlY2ioR3p4dR8X0JYBlQAAAAAAAAAAaTpwn64Rl3Rydlbv8AtRJAAjqzt1wpR+up2jCMFiEVFeywbAAAAAAAAAD/2Q=='
      },
      sex: {
        type: DataTypes.ENUM('male', 'female', 'others'),
        defaultValue: 'others'
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: 'Rwanda'
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('profile');
  }
};