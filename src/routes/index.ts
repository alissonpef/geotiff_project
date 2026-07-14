import type { Express } from 'express';
import tileRoutes from './tile-routes.js';
import variRoutes from './vari-routes.js';
import geotiffRoutes from './geotiff-routes.js';
import spectralIndexRoutes from './spectral-index-routes.js';

export function registerRoutes(app: Express): void {
  app.use('/tile', tileRoutes);
  app.use('/vari', variRoutes);
  app.use('/index', spectralIndexRoutes);
  app.use('/geotiffs', geotiffRoutes);

  app.get('/health', (req, res) => {
    res.json({
      success: true,
      status: 'OK',
      timestamp: new Date().toISOString(),
    });
  });
}
