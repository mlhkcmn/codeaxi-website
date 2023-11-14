import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Blocks, FileCode, MonitorSmartphone, Smartphone } from 'lucide-react';

export const Features = () => {
  return (
    <>
      <Container id='features' maxWidth="none" className="featuresContainer">
        <Container maxWidth="lg">
          <Grid container spacing={8} direction="column" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography className="featuresTitle">
                Hizmetlerimiz
                <hr />
              </Typography>
            </Grid>
            <Grid item container xs={12} textAlign="center" spacing={2} direction="row" justifyContent="center" alignItems="center">
              <Grid item xs={6} md={3}>
                <Typography>
                  <MonitorSmartphone className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Özel Yazılım Geliştirme
                </Typography>
                <Typography className="featuresText2">
                  Web uygulamaları, mobil uygulamalar, masaüstü uygulamalar ve diğer özel yazılımların tasarımı ve geliştirilmesi.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <Smartphone className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Mobil Uygulama Geliştirme
                </Typography>
                <Typography className="featuresText2">
                  İOS ve Android için mobil uygulama geliştirme. Hem kullanıcı arayüzü hem de kullanıcı deneyimi tasarımı.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <Blocks className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Yazılım Entegrasyonları
                </Typography>
                <Typography className="featuresText2">
                  Farklı yazılımlar arasında entegrasyon sağlama. Varolan sistemlerle uyumlu çalışan özel çözümler geliştirme.
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography>
                  <FileCode className="featuresIcon" />
                </Typography>
                <Typography className="featuresText1">
                  Yazılım Bakım ve Destek
                </Typography>
                <Typography className="featuresText2">
                  Varolan yazılım sistemlerinin bakımını yapma. Müşteri desteği, güncellemeler ve hata düzeltmeleri sağlama.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};
