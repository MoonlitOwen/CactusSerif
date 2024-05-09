rm fonts/*.otf
node source/clean-ufo.mjs
gftools builder source/config.yaml
