using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project_DAW.Migrations
{
    public partial class sdybx : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Badge",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Badge", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Model",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    denumire = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Model", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Posesor",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    badgeid = table.Column<int>(type: "int", nullable: true),
                    badge_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posesor", x => x.id);
                    table.ForeignKey(
                        name: "FK_Posesor_Badge_badgeid",
                        column: x => x.badgeid,
                        principalTable: "Badge",
                        principalColumn: "id");
                });

            migrationBuilder.CreateTable(
                name: "Fest",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    modelid = table.Column<int>(type: "int", nullable: true),
                    model_id = table.Column<int>(type: "int", nullable: false),
                    posesorid = table.Column<int>(type: "int", nullable: true),
                    posesor_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fest", x => x.id);
                    table.ForeignKey(
                        name: "FK_Fest_Model_modelid",
                        column: x => x.modelid,
                        principalTable: "Model",
                        principalColumn: "id");
                    table.ForeignKey(
                        name: "FK_Fest_Posesor_posesorid",
                        column: x => x.posesorid,
                        principalTable: "Posesor",
                        principalColumn: "id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fest_modelid",
                table: "Fest",
                column: "modelid");

            migrationBuilder.CreateIndex(
                name: "IX_Fest_posesorid",
                table: "Fest",
                column: "posesorid");

            migrationBuilder.CreateIndex(
                name: "IX_Posesor_badgeid",
                table: "Posesor",
                column: "badgeid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fest");

            migrationBuilder.DropTable(
                name: "Model");

            migrationBuilder.DropTable(
                name: "Posesor");

            migrationBuilder.DropTable(
                name: "Badge");
        }
    }
}
