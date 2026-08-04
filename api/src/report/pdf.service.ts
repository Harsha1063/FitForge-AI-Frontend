import { Injectable } from '@nestjs/common';
import PDFDocument from 'pdfkit';

@Injectable()
export class PdfService {
  generatePdf(): PDFKit.PDFDocument {
    const doc = new PDFDocument({
      margin: 50,
      size: 'A4',
    });

    doc.fontSize(24).text('FitForge Report', {
      align: 'center',
    });

    doc.moveDown();

    doc.fontSize(14).text('Professional Fitness Report');

    doc.end();

    return doc;
  }
}