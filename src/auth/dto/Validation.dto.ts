import { PartialType } from "@nestjs/mapped-types";
import { LoginDto } from "./Login.dto";

export class ValidationDto extends PartialType(LoginDto) {
    nombre: string;
    correo: string;
}