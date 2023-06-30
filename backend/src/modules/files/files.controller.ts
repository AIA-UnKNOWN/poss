import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('files')
export class FilesController {

  @Get(':fileName')
  findOne(@Param('fileName') fileName: string, @Res() res: Response) {
    return res.sendFile(fileName, {
      root: './uploads',
    });
  }
  
}
