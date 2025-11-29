<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

include("../includes/config.php");

$db = new Conexion();

$data = json_decode(file_get_contents("php://input"), true);

$id_producto = $data["id"] ?? null;
$cantidad = $data["cantidad"] ?? 1;

if (!$id_producto) {
    echo json_encode(["error" => "ID de producto faltante"]);
    exit;
}

try {
    $stmt = $db->pdo->prepare("
        INSERT INTO carrito (id_producto, cantidad)
        VALUES (?, ?)
    ");
    $stmt->execute([$id_producto, $cantidad]);

    echo json_encode(["success" => true]);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
