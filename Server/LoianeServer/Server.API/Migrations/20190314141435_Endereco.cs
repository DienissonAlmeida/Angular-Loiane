using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Server.API.Migrations
{
    public partial class Endereco : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workout_Address_AddressId",
                table: "Workout");

            migrationBuilder.DropTable(
                name: "Address");

            migrationBuilder.RenameColumn(
                name: "AddressId",
                table: "Workout",
                newName: "EnderecoId");

            migrationBuilder.RenameIndex(
                name: "IX_Workout_AddressId",
                table: "Workout",
                newName: "IX_Workout_EnderecoId");

            migrationBuilder.CreateTable(
                name: "Endereco",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cep = table.Column<string>(nullable: true),
                    Numero = table.Column<int>(nullable: false),
                    Complemento = table.Column<string>(nullable: true),
                    Rua = table.Column<string>(nullable: true),
                    Bairro = table.Column<string>(nullable: true),
                    Cidade = table.Column<string>(nullable: true),
                    RS = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Endereco", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Workout_Endereco_EnderecoId",
                table: "Workout",
                column: "EnderecoId",
                principalTable: "Endereco",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Workout_Endereco_EnderecoId",
                table: "Workout");

            migrationBuilder.DropTable(
                name: "Endereco");

            migrationBuilder.RenameColumn(
                name: "EnderecoId",
                table: "Workout",
                newName: "AddressId");

            migrationBuilder.RenameIndex(
                name: "IX_Workout_EnderecoId",
                table: "Workout",
                newName: "IX_Workout_AddressId");

            migrationBuilder.CreateTable(
                name: "Address",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Cep = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Complement = table.Column<string>(nullable: true),
                    Neighborhood = table.Column<string>(nullable: true),
                    Number = table.Column<int>(nullable: false),
                    PublicPlace = table.Column<string>(nullable: true),
                    UF = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Address", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Workout_Address_AddressId",
                table: "Workout",
                column: "AddressId",
                principalTable: "Address",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
