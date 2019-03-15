using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.API.Migrations
{
    public partial class Address : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Workout");

            migrationBuilder.DropColumn(
                name: "TimeInSeconds",
                table: "Workout");

            migrationBuilder.RenameColumn(
                name: "DistanceInMeters",
                table: "Workout",
                newName: "AddressId");

            migrationBuilder.AddColumn<string>(
                name: "Nome",
                table: "Workout",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "email",
                table: "Workout",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cep = table.Column<string>(nullable: true),
                    Number = table.Column<int>(nullable: false),
                    Complement = table.Column<string>(nullable: true),
                    PublicPlace = table.Column<string>(nullable: true),
                    Neighborhood = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    UF = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Workout_AddressId",
                table: "Workout",
                column: "AddressId");

            migrationBuilder.AddForeignKey(
                name: "FK_Workout_Address_AddressId",
                table: "Workout",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workout_Address_AddressId",
                table: "Workout");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.DropIndex(
                name: "IX_Workout_AddressId",
                table: "Workout");

            migrationBuilder.DropColumn(
                name: "Nome",
                table: "Workout");

            migrationBuilder.DropColumn(
                name: "email",
                table: "Workout");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "Workout",
                newName: "DistanceInMeters");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "Date",
                table: "Workout",
                nullable: false,
                defaultValue: new DateTimeOffset(new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new TimeSpan(0, 0, 0, 0, 0)));

            migrationBuilder.AddColumn<long>(
                name: "TimeInSeconds",
                table: "Workout",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
